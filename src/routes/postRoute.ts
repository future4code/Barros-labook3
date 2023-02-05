import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post('/post', postController.createPost)
postRouter.get('/posts/:id', postController.getPostById)
postRouter.get('/posts', postController.getPosts)
postRouter.get('/feed/:id', postController.getFeed)