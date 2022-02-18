
import express, { Router, Request, Response } from 'express'

import { sendEmail } from '../emailConfig/emailConfig';

const EmailRouter = Router();

EmailRouter.use(express.json());

EmailRouter.post("/send", (req: Request, res: Response) => {
    const { text } = req.body;

    sendEmail(text)

    return res.status(200).json(text)
})

export { EmailRouter };