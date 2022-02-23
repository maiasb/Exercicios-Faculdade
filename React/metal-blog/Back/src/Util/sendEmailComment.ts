
import { sender } from "../emailConfig/emailConfig";
import nodemailer from 'nodemailer';

export async function sendEmailComment(email: string, text: string) {
    try {
        let response = await sender.sendMail({
            from: '"Você nos notou 🚀😍" <progavancadaavaliacao@gmail.com>',
            to: email,
            subject: 'E-mail automático (AVALIAÇÃO)',
            text: `Obrigado por nos enviar seu comentário. Levaremos em conta cada palavra. 😊 \n
            Seu comentário: ${text}`
        })

        console.log("Message sent: %s", response.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(response));
    } catch (err) {
        console.error(err)
    }
}