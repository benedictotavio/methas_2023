import { Router } from 'express'

import {
    createUserHandler,
    forgotPasswordHandler,
    resetPasswordHandler,
    verifyUserHandler,
    getCurrentUserHandler
} from '../controllers/user.controller'

import validateResource from '../middlewares/validateResource'
import {
    createUserSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    verifyUserSchema
} from '../schema/user.schema'

const router = Router()

router.post("/", validateResource(createUserSchema), createUserHandler);
router.post("/verify/:id/:verificationCode", validateResource(verifyUserSchema), verifyUserHandler);
router.post("/forgotpassword", validateResource(forgotPasswordSchema), forgotPasswordHandler);
router.post("/resetpassword/:id/:passwordResetCode", validateResource(resetPasswordSchema), resetPasswordHandler);
router.get("/me", getCurrentUserHandler);

export default router