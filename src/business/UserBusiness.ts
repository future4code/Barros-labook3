import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { IncompleteData, InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { userInputDTO, userInsertDTO } from "../model/userDTO";
import {IdGenerator} from "../services/IdGenerator"

export class UserBusiness {
    async createUser (input: userInputDTO ) {
        try {
            let statusCode = 400
            let message
            if (!input.name || !input.email || !input.password) {
                throw new IncompleteData()
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
            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(userData)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}