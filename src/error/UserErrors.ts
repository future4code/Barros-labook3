import { CustomError } from "./customError";

export class IncompleteData extends CustomError {
    constructor() {
        super(422, "Precisa passar: nome, email e password.")
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