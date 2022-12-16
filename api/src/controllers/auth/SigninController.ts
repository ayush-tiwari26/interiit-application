import {Request, Response} from "express";
import {AppDataSource} from "../../../omrconfig";
import {UserEntity} from "../../models/entity/UserEntity";
import bcrypt from "bcrypt";
import {Repository} from "typeorm";
import {UserResponseModel} from "../../models/user/UserResponseModel";
import JWT from "jsonwebtoken";
import {HttpHeaders, HttpStatus} from "../../enums";
import {NotFoundError, UnauthorizedError} from "../../errors";

export const signinController = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const userRepository: Repository<UserEntity> = AppDataSource.getRepository(UserEntity);
    const user = await userRepository.findOneBy({email: email});
    if (!user) {
        throw new NotFoundError("User not found");
    }
    const verified = await bcrypt.compare(password, user.password);
    if (!verified) {
        throw new UnauthorizedError("Invalid password");
    }
    const userSigninModel: UserResponseModel = new UserResponseModel(user.name, user.email);
    res.set(HttpHeaders.AUTHORIZATION, JWT.sign({userSigninModel}, process.env.JWT_SECRET_KEY!, {expiresIn: "1d"}))
        .status(HttpStatus.OK)
        .json(userSigninModel);
}