
import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, getDatabase, ref, set, child, get } from "../Services/firebase";

import { sendEmailLogin } from "../Util/sendEmail";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
    const [user, setUser] = useState();

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
                        }
                    }
                    else {
                        set(ref(db, 'users/' + user.uid), {
                            userName: user.displayName,
                            userEmail: user.email
                        })

                        sendEmailLogin({ email: user.email })
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

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}