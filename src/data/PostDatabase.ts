import { postInsertDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase"

const TABLE_NAME = "labook_posts"

export class PostDataBase extends BaseDatabase  {

    async insertPost (postData: postInsertDTO) {
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

    
}