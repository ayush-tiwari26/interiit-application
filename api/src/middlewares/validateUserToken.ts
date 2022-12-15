import {NextFunction, Request, Response} from "express";
import JWT from "jsonwebtoken";
import {ForbiddenError, UnauthorizedError} from "../errors";
import {HttpHeaders} from "../enums";

export const validateUserToken = (req: Request & {user?: unknown}, res: Response, next: NextFunction) => {
    const bearerToken = req.headers[HttpHeaders.AUTHORIZATION];
    if (bearerToken === undefined) {
        throw new UnauthorizedError("No Token Provided");
    }
    try {
        const decoded: any = JWT.verify((bearerToken), process.env.JWT_SECRET_KEY!);
        req.user = decoded.userSigninModel;
    } catch (err) {
        console.log(err);
        throw new ForbiddenError("Invalid Admin Token");
    }
    next();
}