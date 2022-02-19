import { Link } from 'react-router-dom';

import './LinkButton.scss'

export function LinkButton({ to, text }) {
    return (
        <Link className='linkButton' to={to} >{text}</Link>
    )
}