
import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getDatabase, ref, set, child, get } from 'firebase/database'

import { sendEmailLogin } from "../Util/sendEmail";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(result.user)

                const db = getDatabase()

                const dbRef = ref(getDatabase());
                get(child(dbRef, `users/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        if (!snapshot.val()[user.uid]) {
                            set(ref(db, 'users/' + user.uid), {
                                userName: user.displayName,
                                userEmail: user.email
                            })

                            sendEmailLogin({ email: user.email })
                            localStorage.removeItem("user")
                            localStorage.setItem("user", JSON.stringify(user))
                            window.location.reload();
                        } else {
                            console.log(user)
                            localStorage.removeItem("user")
                            localStorage.setItem("user", JSON.stringify(user))
                            window.location.reload();
                        }
                    }
                    else {
                        set(ref(db, 'users/' + user.uid), {
                            userName: user.displayName,
                            userEmail: user.email
                        })

                        sendEmailLogin({ email: user.email })
                        localStorage.removeItem("user")
                        localStorage.setItem("user", JSON.stringify(user))
                        window.location.reload();
                    }
                }).catch((error) => {
                    console.error(error);
                });
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    async function logOutGoogle() {
        const auth = getAuth()
        signOut(auth).then(() => {
            localStorage.removeItem("user")
            window.location.reload();
        })
            .catch((err) => {
                console.error(err)
            })
    }
    return (
        <AuthContext.Provider value={{ user, setUser, signInWithGoogle, logOutGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}