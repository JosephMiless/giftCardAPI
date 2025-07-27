import { Router } from "express";
import { logoutUserController, refreshUserTokenController } from "./tokens.controllers.js";
import { auth } from "../middleware/auth.js";


export const tokenRouter = Router();

tokenRouter.post('/refreshUser', refreshUserTokenController);
tokenRouter.delete('/logoutUser', auth, logoutUserController);