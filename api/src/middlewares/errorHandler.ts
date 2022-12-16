import {Request, Response, NextFunction} from "express";
import {CustomError} from "../errors";
import {HttpStatus} from "../enums";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({errors: err.serializeErrors()})
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        errors: [{message: 'Something went wrong', error: err.message}]
    })
}