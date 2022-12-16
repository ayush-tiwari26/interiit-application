import {Router} from "express";
import {signinController} from "../../controllers/auth/SigninController";
import {signupController} from "../../controllers/auth/SignupController";
import {validateRequest} from "../../middlewares/validateRequest";
import {validateUserToken} from "../../middlewares/validateUserToken";
import {currentUserController} from "../../controllers/auth/CurrentUserController";
import {body} from "express-validator";

const router = Router();
router.get('/current-user',
    validateUserToken,
    currentUserController)

router.post('/signin',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').trim().notEmpty().withMessage('You must supply a password'),
    ],
    validateRequest,
    signinController)

router.post('/signup',
    [
        body('name').notEmpty().withMessage('You must give a name'),
        body('email').isEmail().withMessage('Email must be valid'),
    ],
    validateRequest,
    signupController)

export {router}