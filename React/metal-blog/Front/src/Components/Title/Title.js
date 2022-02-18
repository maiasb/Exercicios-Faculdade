
import './Title.scss'

export function Title({ Text, className }) {
    return (
        <h1 id='Title' className={className}>{Text}</h1>
    )
}