import dotenv from 'dotenv';
dotenv.config();

import connectDatabse from './config/connectdb'

import express from 'express';
import cros from 'cors';
import { CVRouter } from './router/cv.route';

connectDatabse()
const app = express();

app.use(express.json())
app.use(express.urlencoded())

const corsOptions = {
    origin: ['http://localhost:3000', 'https://my-new-portfolio-nu-bice.vercel.app'],
    methds: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    headers: ['Content-type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}
app.use(cros(corsOptions))

app.use('/cv', CVRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running http//localhost:${process.env.PORT}`);
});