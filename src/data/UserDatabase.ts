import { userInputDTO, userInsertDTO } from "../model/userDTO"
import { BaseDatabase } from "./BaseDatabase"

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
             .into('labook_users')
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    
}