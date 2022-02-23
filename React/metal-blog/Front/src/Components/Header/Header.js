
import { useAuth } from '../../Hooks/useAuth'
import noImg from '../../Contents/Img/NoImg.png'

import { LinkButton } from '../../Components/LinkButton/LinkButton'

import './Header.scss'

export function Header(props) {
    const { user, logOutGoogle } = useAuth()

    function Sair() {
        if (user) {
            return (
                <div id='divLogOut'>
                    <LinkButton onClick={logOutGoogle} text="Sair"></LinkButton>
                </div>
            )
        } else {
            return (
                <div id='noDivLogOut'></div>
            )
        }
    }

    return (
        <header>{props.children}
            <div id='divUser'>
                <p id='nameUser'>{user ? user.displayName : ''}</p>
                <img src={user ? user.photoURL : noImg} alt="UserImage" className={user ? 'withImg' : 'noImg'} />
            </div>
            <Sair />
        </header>
    )
}