export default class Helpers {
    /**
     * @param {string} string
     * @returns {number}
     */
    static makeHash(string) {
        let hash = 0, i = 0, chr = 0;

        if (string.length === 0) {
            return hash
        }

        for (i = 0; i < string.length; i++) {
            chr = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    }
}