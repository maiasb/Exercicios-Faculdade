
import googleIcon from '../../Contents/Img/google-icon.svg'

import { DefaultButton } from '../../Components/DefaultButton/DefaultButton'

import { signIn } from '../../Util/signIn'

import './Login.scss'

export function Login() {
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