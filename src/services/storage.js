export default class Storage {
    /**
     * @param {string} key
     * @param {*} value
     */
    static set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    /**
     * @param {string} key
     * @param {*} def
     * @returns {*|string}
     */
    static get(key, def = '') {
        if (!localStorage.getItem(key)) {
            return def;
        }

        let value = localStorage.getItem(key);
        return JSON.parse(value);
    }
}