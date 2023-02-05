import { CustomError } from "./CustomError";

export class IncompleteDataPost extends CustomError {
    constructor() {
        super(422, "Precisa informar: photo, description, type e authorId.")
    }
}

export class InvalidTypePost extends CustomError {
    constructor() {
        super(422, "Tipo de post deve ser: normal ou event")
    }
}

export class PostNotFound extends CustomError {
    constructor() {
        super(404, "Post não encontrado.")
    }
}