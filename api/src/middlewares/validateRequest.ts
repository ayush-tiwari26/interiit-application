import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import {HttpHeaders} from "../enums";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', HttpHeaders.AUTHORIZATION);
    const error = validationResult(req);
    if (!error.isEmpty()) {
        throw new Error(error.array()[0].msg);
    }
    next();
}