import {Request, Response} from "express";

const multer = require('multer');

const upload = multer({
    dest: 'public/uploads/'
}).single('file')

export const uploadFileController = async (req: Request, res: Response) => {
    //TODO: add file and details from req to db
    upload(req, res, function (err: any) {
        // @ts-ignore
        const file = req.file;
        if (!err) {
            console.log(file)
            res.status(200).send("File uploaded successfully");
        } else if(!err){
            console.log(err)
            res.status(500).send(err)
        }
    })
}