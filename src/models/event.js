import * as UUID from "uuid"
export default class Event {
    /**
     * @param {string} title
     * @param {string} emoji
     * @param {string} startDate
     * @param {User} author
     * @param {User[]} agents
     */
    constructor({title, emoji, startDate, author, agents}) {
        this.id = UUID.v4();
        this.title = title;
        this.startDate = startDate;
        this.author = author;
        this.agents = agents;
        this.emoji = emoji;
    }

    /**
     * @param {User} agent
     */
    assignAgent(agent) {
        this.agents.push(agent);
    }
}