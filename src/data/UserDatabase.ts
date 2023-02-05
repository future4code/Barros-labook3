import { userInputDTO, userInsertDTO } from "../model/userDTO"
import { BaseDatabase } from "./BaseDatabase"

const TABLE_NAME = 'labook_users'
export class UserDatabase extends BaseDatabase  {
    async insertUser (input: userInsertDTO):Promise<void> {
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

    async selectUserById (id:string): Promise<userInsertDTO> {
        const result = await BaseDatabase.connection
        .select("*")
        .where({id})
        .into(TABLE_NAME)
        
        return result[0];
    }
    
    async selectUsers ():Promise<any> {
        try {
           const result = await UserDatabase.connection
                          .select('*')
                          .into(TABLE_NAME)
            return result; 
        } catch (error:any) {
            
        }
    }
 }