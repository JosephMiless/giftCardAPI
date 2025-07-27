import { Router } from "express";
import { loginUserController, registerUserController } from "./users.controllers.js";

export const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/login', loginUserController);