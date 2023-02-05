import { Request, Response } from "express"
import { FriendshipBusiness } from "../business/FriendshipBusiness"

const friendshipBusiness = new FriendshipBusiness()

export class FriendShipController {
    async postFriendship (req: Request, res: Response):Promise<void> {
        try {
            const {userId, friendId} = req.body
            await friendshipBusiness.postFriendship({userId, friendId})
            res.status(201).send({message: "Amizade criada com sucesso!"})
        } catch (error:any) {
           res.status(error.statusCode || 400).send(error.message)
        }
    }
}