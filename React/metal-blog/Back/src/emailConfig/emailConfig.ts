
import nodemailer from 'nodemailer';

var sender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: '',
    port: 587,
    secure: false,
    auth: {
        user: 'progavancadaavaliacao@gmail.com',
        pass: 'Progavancada'
    }

})

export async function sendEmail(text: string) {
    let response = await sender.sendMail({
        from: '"Opaaaaa🚀😍" <progavancadaavaliacao@gmail.com>',
        to: 'caio.maiasb@gmail.com, caioocara18@gmail.com',
        subject: 'E-mail automático (AVALIAÇÃO)',
        text: text
    })

    console.log("Message sent: %s", response.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(response));
}