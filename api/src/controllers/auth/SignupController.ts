/* eslint-disable @typescript-eslint/no-explicit-any */
import {Request, Response} from "express"
import {AppDataSource} from "../../../omrconfig";
import {UserEntity} from "../../models/entity/UserEntity";
import bcrypt from 'bcrypt';
import {HttpHeaders, HttpStatus} from "../../enums";
import {UserResponseModel} from "../../models/user/UserResponseModel";
import JWT from "jsonwebtoken";
import {BadRequestError} from "../../errors";

export const signupController = async (req: Request, res: Response) => {
    const repository = AppDataSource.getRepository(UserEntity);
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const user = new UserEntity(name, email, hash);
    let savedUserEntity: UserEntity;
    try{
        savedUserEntity = await repository.save(user);
    }catch (err){
        throw new BadRequestError("User already exists");
    }
    const userResponseModel: UserResponseModel = new UserResponseModel(savedUserEntity.name, savedUserEntity.email);
    res.set(HttpHeaders.AUTHORIZATION, JWT.sign({userResponseModel}, process.env.JWT_SECRET_KEY!, {expiresIn: "1d"}))
        .status(HttpStatus.RESOURCE_CREATED)
        .json(userResponseModel);
}