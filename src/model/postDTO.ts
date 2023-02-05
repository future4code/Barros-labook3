export enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

export interface postInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface postInsertDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}