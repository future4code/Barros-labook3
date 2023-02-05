import {v4} from "uuid";

export abstract class IdGenerator {

    static generateId(): string {
        return v4();
    }
}