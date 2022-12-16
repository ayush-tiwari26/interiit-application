import {Router} from "express";
import {body} from "express-validator";
import {validateRequest} from "../../middlewares/validateRequest";
import {validateUserToken} from "../../middlewares/validateUserToken";
import {uploadFileController} from "../../controllers/files/uploadFileController";

const router = Router()

router.post('/upload',
[body('name').notEmpty().withMessage('You must give a file name in body'),
        body('fileData').notEmpty().withMessage('You must give a file data in body'),],
    validateRequest,
    validateUserToken,
    uploadFileController
    )

export {router}