
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

import { DefaultButton } from "../DefaultButton/DefaultButton"

import { sendEmail } from "../../Util/sendEmail"

import "./TextBox.scss"

export function TextBox() {
    const [comment, setComment] = useState('')

    function takeComment() {
        sendEmail(comment)
        toast.success('E-mail enviado!')
    }

    return (
        <div id="divTxt" >
            <Toaster />
            <textarea onChange={event => setComment(event.target.value)}>
            </textarea>
            <div className="divButton">
                <DefaultButton onClick={takeComment}>Enviar</DefaultButton>
            </div>
        </div>
    )
}