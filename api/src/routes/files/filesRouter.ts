import {Router} from "express";
import {body} from "express-validator";
import {validateRequest} from "../../middlewares/validateRequest";
import {validateUserToken} from "../../middlewares/validateUserToken";
import {uploadFileController} from "../../controllers/files/uploadFileController";

const router = Router()

router.post('/upload',
    validateUserToken,
    uploadFileController
    )

export {router}