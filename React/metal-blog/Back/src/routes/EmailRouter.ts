
import express, { Router, Request, Response, response } from 'express'

import { sendEmailLogin } from '../Util/sendEmailLogin';

const EmailRouter = Router();

EmailRouter.use(express.json());

EmailRouter.post("/login", (req: Request, res: Response) => {
    const { email } = req.body;

    sendEmailLogin(email)
    return response.status(200).json('Opa')
})

export { EmailRouter };