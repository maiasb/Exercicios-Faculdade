
import { useAuth } from '../../Hooks/useAuth'
import noImg from '../../Contents/Img/NoImg.png'

import './Header.scss'

export function Header(props) {
    const { user } = useAuth()

    return (
        <header>{props.children}
            <div id='divUser'>
                <p id='nameUser'>{user ? user.displayName : ''}</p>
                <img src={user ? user.photoURL : noImg} alt="UserImage" className={user ? 'withImg' : 'noImg'} />
            </div>
        </header>
    )
}