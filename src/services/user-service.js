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
     * @returns {User[]}
     */
    static getAgentUsers() {
        return [
            new User({
                id: 1,
                name: "Сергей Семенов",
                email: "sergeysemenov@gmail.ru",
                password: "123456789",
                role: Roles.agent
            }),
            new User({
                id: 2,
                name: "Семен Семенов",
                email: "sergeysemenov@gmail.ru",
                password: "123456789",
                role: Roles.agent
            }),
            new User({
                id: 3,
                name: "Семен Сергеев",
                email: "sergeysemenov@gmail.ru",
                password: "123456789",
                role: Roles.agent
            })
        ];
    }
}