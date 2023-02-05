import { postInsertDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase"

const TABLE_NAME = "labook_posts"

export class PostDataBase extends BaseDatabase  {

    async insertPost (postData: postInsertDTO): Promise<void> {
        try {
            await PostDataBase.connection
            .insert({
                id: postData.id,
                photo: postData.photo,
                description: postData.description,
                type: postData.type,
                author_id: postData.authorId
            })
            .into(TABLE_NAME)

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getPostById (id:string): Promise<any> {
        try {
            const result = await PostDataBase.connection
            .select("*")
            .where({ id })
            .into(TABLE_NAME)
            
            return result[0];

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
}