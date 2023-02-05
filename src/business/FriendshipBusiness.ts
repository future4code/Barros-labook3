import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { FriendNotFound, FriendshipIncompleteData, FriendshipNotFound } from "../error/FriendshipErrors";
import { UserNotFound } from "../error/UserErrors";
import { friendInsertDTO, friendshipInputDTO } from "../model/friendshipDTO";
import { IdGenerator } from "../services/IdGenerator";

const friendshipDataBase = new FriendshipDatabase()

export class FriendshipBusiness {
    async postFriendship (input: friendshipInputDTO):Promise<void> {
        try {
            if(!input.userId || !input.friendId) {
                throw new FriendshipIncompleteData()
            }

            const userDatabase = new UserDatabase()
            const searchUser = await userDatabase.getUserById(input.userId)
            const searchFriend = await userDatabase.getUserById(input.friendId)

            if(!searchUser) {
                throw new UserNotFound()
            }

            if(!searchFriend) {
                throw new FriendNotFound()
            }

            const id = IdGenerator.generateId()
            const friendshipData: friendInsertDTO = {
                id: id,
                userId: input.userId,
                friendId: input.friendId
            } 

            friendshipDataBase.insertFriendship(friendshipData);

        } catch (error:any) {
          throw new CustomError(error.statusCode, error.message);
        }
    }

    async unfriend (input: friendshipInputDTO):Promise<void> {
        try {

            if(!input.userId || !input.friendId) {
                throw new FriendshipIncompleteData()
            }

            const friendshipId = await friendshipDataBase.selectFriendshipById(input)

            if (!friendshipId) {
                throw new FriendshipNotFound();
            }

            friendshipDataBase.deleteFriendship(friendshipId.id)
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
}