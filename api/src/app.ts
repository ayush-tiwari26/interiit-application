import "express-async-errors"
import express from 'express';
import {errorHandler} from './middlewares/errorHandler';
import {Request, Response} from "express";
import {router as authRouter} from "./routes/auth/auth";
import BodyParser from "body-parser";
import cors from "cors";
import {HttpHeaders} from "./enums";

const app = express();
app.use(BodyParser.json())
app.use(cors({
    exposedHeaders: HttpHeaders.AUTHORIZATION,
}))
app.use('/api', authRouter)
app.get('/api', (req: Request, res: Response) => res.send("Hi there"))
app.get('/', (req: Request, res: Response) => res.send("Hi there"))

app.use(errorHandler)
export {app}