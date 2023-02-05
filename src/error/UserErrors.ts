import { CustomError } from "./CustomError";

export class IncompleteDataUser extends CustomError {
    constructor() {
        super(422, "Precisa informar: nome, email e password.")
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(422, "Email inválido")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(422, "Senha deve conter no mínimo 6 caracteres.")
    }
}