import Helpers from "@/services/helpers";
import * as UUID from "uuid"

export default class User {
    /**
     * @param {string} name
     * @param {string} email
     * @param {string} password
     * @param {string} role
     */
    constructor({name, email, password, role}) {
        this.id = UUID.v4();
        this.name = name;
        this.email = email;
        this.password = Helpers.makeHash(password);
        this.role = role;
    }
}