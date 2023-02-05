import express, { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userInputDTO } from "../model/userDTO"


export class UserController { 

     async createUser (req: Request, res: Response) {

        try {
           let message = "Usuário cadastrado com sucesso!"
           const { name, email } = req.body

           const password = req.body.password.toString()
     
           if (!name || !email || !password) {
              res.statusCode = 406
              message = 'Deve conter: name, email e password'
              throw new Error(message)
           }

           if(!email.includes("@")) {
            res.statusCode = 422
            message = "Preisa de um email válido"
            throw new Error(message)
           }

           const input: userInputDTO = {
            name,
            email,
            password
           } 
           console.log(typeof password)
     
           const userBusiness = new UserBusiness()
           await userBusiness.createUser(input)
     
           res.status(201).send({ message })
     
        } catch (error:any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
        }
     }


}