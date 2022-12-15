import {Request, Response} from "express";
import {BadRequestError, UnauthorizedError} from "../../errors";
import {HttpHeaders, HttpStatus} from "../../enums";

export const currentUserController = async (req: Request & {user?: any}, res: Response) => {
    const bearerToken = req.headers[HttpHeaders.AUTHORIZATION];
    if (!bearerToken) {
        throw new BadRequestError("No Token Provided");
    }
    try {
        res.status(HttpStatus.OK).send(req.user);
    } catch (err: any) {
        throw new UnauthorizedError("Invalid Token");
    }
}