import * as UUID from "uuid"
export default class Event {
    /**
     * @param {string} title
     * @param {string} startDate
     * @param {User} author
     * @param {User[]} agents
     */
    constructor({title, startDate, author, agents}) {
        this.id = UUID.v4();
        this.title = title;
        this.startDate = startDate;
        this.author = author;
        this.agents = agents;
    }

    /**
     * @param {User} agent
     */
    addAgent(agent) {
        this.agents.push(agent);
    }
}