import { BaseDatabase } from "./BaseDatabase";
import { friendInsertDTO, friendshipInputDTO } from "../model/friendshipDTO";

const TABLE_NAME = "labook_friendship";

export class FriendshipDatabase extends BaseDatabase {

    async insertFriendship (input: friendInsertDTO):Promise<void> {
        try {
            await BaseDatabase.connection
            .insert({
                id: input.id,
                id_user: input.userId,
                id_friend: input.friendId
            })
            .into(TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async selectFriendshipById (input: friendshipInputDTO):Promise<any> {
        try {
            const result = await BaseDatabase.connection
            .select('*')
            .where({
                id_user: input.userId,
                id_friend: input.friendId
            })
            .into(TABLE_NAME)

            return result[0]
            
        } catch (error:any) {
         throw new Error(error.sqlMessage || error.message);
        }
    }

    async deleteFriendship (id: string):Promise<void> {
        try {
            await BaseDatabase.connection
            .delete()
            .where({id})
            .into(TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}