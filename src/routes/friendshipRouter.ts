import express from "express";
import { FriendShipController } from "../controller/FriendshipController";

export const friendshipRouter = express.Router();

const friendshipController = new FriendShipController();

friendshipRouter.post('/post', friendshipController.postFriendship)