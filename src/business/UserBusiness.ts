import { UserDatabase } from "../data/UserDatabase";
import { userInputDTO, userInsertDTO } from "../model/userDTO";
import {IdGenerator} from "../services/IdGenerator"

export class UserBusiness {
    async createUser (input: userInputDTO ) {
        try {
            
            const id:string = IdGenerator.generateId()
            const userData: userInsertDTO = {
                id,
                name: input.name,
                email: input.email,
                password: input.password
            }
            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(userData)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}