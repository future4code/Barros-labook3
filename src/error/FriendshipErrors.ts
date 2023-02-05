import { CustomError } from "./CustomError";

export class FriendNotFound extends CustomError {
    constructor() {
        super(422, "Id do amigo não encontrado.")
    }
}

export class FriendshipIncompleteData extends CustomError {
    constructor() {
        super(422, "Deve informar o id do usuário (userId) e o id do amigo a ser adicionado (friendId)")
    }
}

export class FriendshipNotFound extends CustomError {
    constructor() {
        super(404, "Amizade não encontrada. Revise os parâmetros passados.")
    }
}