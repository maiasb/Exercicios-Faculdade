
import './DefaultButton.scss'

export function DefaultButton(props) {
    return (
        <button className={"defaultButton " + props.className} onClick={props.onClick}>{props.children}</button >
    )
}