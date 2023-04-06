import * as UUID from "uuid"
export default class Event {
    /**
     * @param {string} title
     * @param {string} startDate
     * @param {User} author
     */
    constructor({title, startDate, author}) {
        this.id = UUID.v4();
        this.title = title;
        this.startDate = startDate;
        this.author = author;
    }
}