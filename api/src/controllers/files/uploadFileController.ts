import {Request, Response} from "express";

export const uploadFileController = async (req: Request, res: Response) => {
    //TODO: add file and details from req to db
    res.status(200).send("File uploaded successfully");
}