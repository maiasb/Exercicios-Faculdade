
import { sender } from "../emailConfig/emailConfig";
import nodemailer from 'nodemailer';

export async function sendEmailLogin(email: string) {
    let response = await sender.sendMail({
        from: '"Opaaaaa🚀😍" <progavancadaavaliacao@gmail.com>',
        to: email,
        subject: 'E-mail automático (AVALIAÇÃO)',
        text: `Obrigado por se cadastrar. Seja bem-vindo(a) 😊 \n
        Este e-mail é enviado automaticamente aos nosso inscritos, então, não precisa responder 😊`
    })

    console.log("Message sent: %s", response.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(response));
}