import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { IncompleteDataUser, InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { userInputDTO, userInsertDTO } from "../model/userDTO";
import {IdGenerator} from "../services/IdGenerator"

const userDatabase = new UserDatabase()
export class UserBusiness {
    async createUser (input: userInputDTO ) {
        try {
            if (!input.name || !input.email || !input.password) {
                throw new IncompleteDataUser()
             }
  
             if(!input.email.includes("@")) {
              throw new InvalidEmail()
             }
  
             if (input.password.length < 6) {
              throw new InvalidPassword()
             }
            
            const id:string = IdGenerator.generateId()
            const userData: userInsertDTO = {
                id,
                name: input.name,
                email: input.email,
                password: input.password
            }
            await userDatabase.insertUser(userData)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}