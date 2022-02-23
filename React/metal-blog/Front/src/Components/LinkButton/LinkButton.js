import { Link } from 'react-router-dom';

import './LinkButton.scss'

export function LinkButton({ onClick, to, text }) {
    return (
        <Link className='linkButton' to={to} onClick={onClick}>{text}</Link>
    )
}