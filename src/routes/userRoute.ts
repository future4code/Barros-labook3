import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/users', userController.createUser)
userRouter.post('/post', userController.createPost)