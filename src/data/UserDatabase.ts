import { userInputDTO, userInsertDTO } from "../model/userDTO"
import { BaseDatabase } from "./BaseDatabase"

const TABLE_NAME = 'labook_users'
export class UserDatabase extends BaseDatabase  {
    async insertUser (input: userInsertDTO) {
        try {
            await UserDatabase.connection
            .insert({
                id: input.id,
                name: input.name,
                email: input.email,
                password: input.password
             })
             .into(TABLE_NAME)
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    
}