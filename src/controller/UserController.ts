import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userInputDTO } from "../model/userDTO"

const userBusiness = new UserBusiness()
export class UserController { 

     async createUser (req: Request, res: Response):Promise<void> {

        try {

           const { name, email } = req.body
           const password = (req.body.password).toString()

           const input: userInputDTO = {
            name,
            email,
            password
           }

           await userBusiness.createUser(input)
     
           res.status(201).send({ message: "Usuário cadastrado com sucesso!" })
     
        } catch (error:any) {
           res.status(error.statusCode || 400).send(error.message)
        }
     }

     async getAllUsers (req: Request, res: Response) {
         try {
            const users = await userBusiness.getUsers()
            res.status(200).send(users)
         } catch (error:any) {
            
         }
     }
}