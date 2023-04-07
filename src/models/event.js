import * as UUID from "uuid"
export default class Event {
    /**
     * @param {string} title
     * @param {string} emoji
     * @param {string} startDate
     * @param {User} author
     */
    constructor({title, emoji, startDate, author}) {
        this.id = UUID.v4();
        this.title = title;
        this.startDate = startDate;
        this.author = author;
        this.agents = [];
        this.emoji = emoji;
    }
}