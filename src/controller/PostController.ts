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

     async getPostById (req: Request, res: Response) {
      try {
         const id = req.params.id
         const result = await postBusiness.getPostById(id)
         res.status(200).send(result)
         
      } catch (error:any) {
         res.status(error.statusCode || 400).send(error.message)
      }
     }
}

//       if (!queryResult[0]) {
//          res.statusCode = 404
//          message = "Post not found"
//          throw new Error(message)
//       }

//       const post: post = {
//          id: queryResult[0].id,
//          photo: queryResult[0].photo,
//          description: queryResult[0].description,
//          type: queryResult[0].type,
//          createdAt: queryResult[0].created_at,
//          authorId: queryResult[0].author_id,
//       }

//       res.status(200).send({ message, post })

//    } catch (error:any) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400
//       res.send({ message })
//    }
// })