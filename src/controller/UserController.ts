import express, { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userInputDTO } from "../model/userDTO"


export class UserController { 

     async createUser (req: Request, res: Response) {

        try {

           const { name, email } = req.body
           const password = req.body.password.toString()

           const input: userInputDTO = {
            name,
            email,
            password
           }
     
           const userBusiness = new UserBusiness()
           await userBusiness.createUser(input)
     
           res.status(201).send({ message: "Usuário cadastrado com sucesso!" })
     
        } catch (error:any) {
           res.status(error.statusCode || 400).send(error.message)
        }
     }

     async createPost (req: Request, res: Response) {
      try {
         
      } catch (error:any) {
         
      }
     }
}