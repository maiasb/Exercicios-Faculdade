
import { useAuth } from '../../Hooks/useAuth'

import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

import { DefaultButton } from "../DefaultButton/DefaultButton"

// import { sendEmail } from "../../Util/sendEmail"

import "./TextBox.scss"

export function TextBox() {
    const { user } = useAuth()
    const [comment, setComment] = useState('')

    function takeComment() {
        // sendEmail({ email: user.email, text: comment })
        toast.success('Comentário enviado!')
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