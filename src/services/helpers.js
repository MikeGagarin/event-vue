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

    static getAvatarRandomColor() {
        let colors = [
            '#37306B',
            '#66347F',
            '#9E4784',
            '#D27685',
            '#2C3333',
            '#395B64',
            '#A5C9CA'
        ];

        return colors[this.getRandomInt(colors.length - 1)];
    }

    static getRandomEmojis() {
        let emojis = ['🎊','💃','🤹','👸','🎆','🎉','👑','👸','👋','🎊','🎇','🚘','✨','💃','👙','🎉','🔔','🎉','🎅','🎁','🎄'];

        return emojis[this.getRandomInt(emojis.length - 1)];
    }

    /**
     * @param {number} max
     * @returns {number}
     */
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}