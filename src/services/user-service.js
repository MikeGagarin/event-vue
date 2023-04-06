import User from "@/models/user";
import {Roles} from "@/models/roles";

export default class UserService {
    /**
     * @returns {User}
     */
    static getAdminUser() {
        return new User({
            name: "Иван Петров",
            email: "ivanpetrov@gmail.ru",
            password: "123456789",
            role: Roles.admin
        });
    }

    /**
     * @returns {User}
     */
    static getAgentUser() {
        return new User({
            name: "Сергей Семенов",
            email: "sergeysemenov@gmail.ru",
            password: "123456789",
            role: Roles.agent
        });
    }

    /**
     * @returns {User[]}
     */
    static getUsers() {
        return [
            this.getAdminUser(),
            this.getAgentUser()
        ];
    }
}