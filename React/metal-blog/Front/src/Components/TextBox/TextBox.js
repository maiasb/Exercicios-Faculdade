
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../Hooks/useAuth'
import { DefaultButton } from "../DefaultButton/DefaultButton"

import { pushComment } from "../../Util/pushComment";
import { sendEmailComment } from '../../Util/sendEmailComment';

import "./TextBox.scss"

export function TextBox(page) {
    const { user } = useAuth()
    const [comment, setComment] = useState('')

    function takeComment() {
        pushComment(page, user, comment)
        sendEmailComment({ email: user.email, text: comment })
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