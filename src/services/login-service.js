import UserService from "@/services/user-service";
import Helpers from "@/services/helpers";
import Storage from "@/services/storage";

const CURRENT_USER_KEY = 'currentUser';
export default class LoginService {
    static checkCredentials(email, password) {
        let user = UserService.getAdminUser();

        if (user.email === email && user.password === Helpers.makeHash(password)) {
            return user;
        }

        return null;
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