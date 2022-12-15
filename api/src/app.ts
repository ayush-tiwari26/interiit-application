import "express-async-errors"
import express from 'express';
import {Request, Response} from "express";
import {router as authRouter} from "./routes/auth/auth";

const app = express();
app.use('api/', authRouter)
app.get('api/', (req: Request, res: Response) => res.send("Hi there"))
export {app}