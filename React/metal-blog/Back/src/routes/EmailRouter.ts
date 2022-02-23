
import express, { Router, Request, Response, response } from 'express'

import { sendEmailLogin } from '../Util/sendEmailLogin';
import { sendEmailComment } from '../Util/sendEmailComment';

const EmailRouter = Router();

EmailRouter.use(express.json());

EmailRouter.post("/login", (req: Request, res: Response) => {
    const { email } = req.body;

    sendEmailLogin(email)
    return response.status(200).json('Opa')
})

EmailRouter.post("/comment", (req: Request, res: Response) => {
    const { email, text } = req.body;

    sendEmailComment(email, text)
    console.log("Email: " + email + "\n" + "Text: " + text)
    return response.status(200).json('Opa')
})

export { EmailRouter };