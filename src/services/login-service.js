import UserService from "@/services/user-service";
import Helpers from "@/services/helpers";
import Storage from "@/services/storage";

const CURRENT_USER_KEY = 'currentUser';
export default class LoginService {
    static checkCredentials(email, password) {
        let users = UserService.getUsers();
        let foundUsers = users.filter((user) => user.email === email && user.password === Helpers.makeHash(password));

        if (foundUsers.length === 0) {
            return null;
        }

        return foundUsers[0];
    }

    /**
     * @param {User} user
     */
    static authUser(user) {
        Storage.set(CURRENT_USER_KEY, user)
    }

    static logout() {
        Storage.set(CURRENT_USER_KEY, '');
    }

    static checkAuth() {
        return !!Storage.get(CURRENT_USER_KEY);
    }
}