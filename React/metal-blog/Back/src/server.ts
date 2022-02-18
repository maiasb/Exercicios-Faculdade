
import express from 'express';
import cors from 'cors';

import { EmailRouter } from './routes/EmailRouter'

const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser({ extended: true }))
app.use(cors());

app.use("/email", EmailRouter)

app.listen(3333, () => { console.log("Server is running on port 3333") })