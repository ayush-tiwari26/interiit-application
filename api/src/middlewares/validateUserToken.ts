import {NextFunction, Request, Response} from "express";
import JWT from "jsonwebtoken";
import {ForbiddenError, UnauthorizedError} from "../errors";
import {HttpHeaders} from "../enums";

export const validateUserToken = (req: Request & {user?: unknown}, res: Response, next: NextFunction) => {
    let bearerToken = req.headers[HttpHeaders.AUTHORIZATION];
    if(bearerToken[0]=='"' || bearerToken[0]=="'") bearerToken = bearerToken.substring(1, bearerToken.length-1);
    if (bearerToken === undefined) {
        throw new UnauthorizedError("No Token Provided");
    }
    try {
        const decoded: any = JWT.verify((bearerToken), process.env.JWT_SECRET_KEY!);
        req.user = decoded.userSigninModel;
    } catch (err) {
        console.log(err);
        throw new ForbiddenError("Invalid User Token");
    }
    next();
}