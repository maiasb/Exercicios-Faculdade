
import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "../Services/firebase";

import { sendEmailLogin } from "../Util/sendEmail";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
    const [user, setUser] = useState();

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                setUser(result.user)

                sendEmailLogin({ email: user.email })

                console.log(user)
            }).catch((error) => {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}