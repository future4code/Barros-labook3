import { postInsertDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase"

const TABLE_NAME = "labook_posts"

export class PostDataBase extends BaseDatabase  {

    async selectAllPosts ():Promise<postInsertDTO[]> {
        try {
            const result = await PostDataBase.connection
            .select('*')
            .into(TABLE_NAME)

            return result;
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

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

    async getPostById (id:string): Promise<postInsertDTO> {
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

    async selectPostsFeed (id:string):Promise<any> {
        try {
            const result = await PostDataBase.connection
                           .raw(`
                                SELECT author_id, photo, description, created_at 
                                FROM labook_posts
                                JOIN labook_friendship
                                ON labook_posts.author_id = labook_friendship.id_friend
                                WHERE(labook_friendship.id_user = '${id}');
                            `)
    
            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
}