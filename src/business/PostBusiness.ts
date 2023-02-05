import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { PostDataBase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { EmptyFeed, IncompleteDataPost, InvalidTypePost, PostNotFound } from "../error/PostErrors";
import { postInputDTO, postInsertDTO, POST_TYPES } from "../model/postDTO";
import { IdGenerator } from "../services/IdGenerator";

const postDatabase = new PostDataBase()
const friendshipDatabase = new FriendshipDatabase();

export class PostBusiness {

    async createPost (input: postInputDTO):Promise<void> {
        try {

            if(!input.photo || !input.description || !input.type || !input.authorId) {
                throw new IncompleteDataPost()
            }

            const id = IdGenerator.generateId()

            const postData: postInsertDTO = {
                id: id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                authorId: input.authorId
            }

            if ((input.type as POST_TYPES.EVENT) !== POST_TYPES.EVENT && (input.type as POST_TYPES.NORMAL) !== POST_TYPES.NORMAL) {
                throw new InvalidTypePost()
            }

            await postDatabase.insertPost(postData)

        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    async getPostById(id: string):Promise<postInsertDTO> {
        try {
            const postById = postDatabase.getPostById(id)

            if(!postById) {
                throw new PostNotFound()
            }

            return postById;
            
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    async getPosts (): Promise<postInsertDTO[]> {
        try {
            const feed = await postDatabase.selectAllPosts()
            return feed;
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    async getFeed (id:string): Promise<any> {
        try {
            const feed = await postDatabase.selectPostsFeed(id)
            if(feed.length === 0) {
                throw new EmptyFeed()
            }
            return feed;
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
 }