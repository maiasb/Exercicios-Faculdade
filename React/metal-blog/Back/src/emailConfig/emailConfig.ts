
import nodemailer from 'nodemailer';

export const sender = nodemailer.createTransport({
    host: process.env.APP_HOST_SMTP,
    service: '',
    port: parseInt(process.env.APP_PORT_SMTP),
    secure: JSON.parse(process.env.APP_SECURE_SMTP),
    auth: {
        user: process.env.APP_EMAIL_SMTP,
        pass: process.env.APP_PASSWORD_EMAIL_SMTP
    }

})