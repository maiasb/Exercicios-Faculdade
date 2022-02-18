
import './DefaultButton.scss'

export function DefaultButton(props) {
    return (
        <button className="defaultButton" onClick={props.onClick}>{props.children}</button >
    )
}