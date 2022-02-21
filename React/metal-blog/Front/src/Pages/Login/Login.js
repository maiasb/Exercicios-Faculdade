
import { useAuth } from '../../Hooks/useAuth'

import googleIcon from '../../Contents/Img/google-icon.svg'

import { DefaultButton } from '../../Components/DefaultButton/DefaultButton'

import './Login.scss'

export function Login() {
    const { user, signInWithGoogle } = useAuth()

    async function signIn() {
        if (!user) {
            await signInWithGoogle()
        }
    }

    return (
        <div id="PageLogin">
            <main>
                <div className='divLogin'>
                    <DefaultButton
                        onClick={signIn}
                        className="signWithGoogle">
                        <img src={googleIcon} alt="google" />
                        Login com o Google
                    </DefaultButton>
                </div>
            </main>
        </div>
    )
}