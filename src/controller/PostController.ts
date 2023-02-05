import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { postInputDTO } from "../model/postDTO"

const postBusiness = new PostBusiness()

export class PostController { 

     async createPost (req: Request, res: Response) {
      try {
         const { photo, description,type, authorId } = req.body
         const input: postInputDTO = {
            photo, 
            description,
            type,
            authorId,
         }

         await postBusiness.createPost(input)
         res.status(201).send({message: "Post criado com sucesso!"})
         
      } catch (error:any) {
         res.status(error.statusCode || 400).send(error.message)
      }
     }
}