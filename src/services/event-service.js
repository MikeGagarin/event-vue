import { faker } from '@faker-js/faker';
import Event from "@/models/event";
import UserService from "@/services/user-service";
import Storage from "@/services/storage";
import Helpers from "@/services/helpers";

const EVENTS_STORAGE_KEY = 'events';
export default class EventService {
    /**
     * @returns {Event[]}
     */
    static seedEvents() {
        let events = [];

        for (let i = 0; i < 10; i++) {
            let event = new Event({
                title: faker.commerce.productName(),
                emoji: Helpers.getRandomEmojis(),
                startDate: faker.date.future(2023).toLocaleDateString(),
                author: UserService.getAdminUser()
            });
            events.push(event);
        }

        return events;
    }

    /**
     * @returns {Event[]}
     */
    static getEvents() {
        if (this.events) {
            return this.events;
        }

        let events = Storage.get(EVENTS_STORAGE_KEY, null);

        if (!events) {
            events = this.seedEvents();
            Storage.set(EVENTS_STORAGE_KEY, events);
            this.events = events;
        }

        return events;
    }

    /**
     * @param id
     * @returns {Event|null}
     */
    static getEventById(id) {
        let foundEvents = this.getEvents().filter((event) => event.id === id);

        if (foundEvents.length === 0) {
            return null;
        }

        return foundEvents[0];
    }

    /**
     * @param {string} eventId
     * @param {string} agentId
     */
    static assignAgentToEvent(eventId, agentId) {
        let agent = UserService.getAgentById(agentId);

        let modEvents = this.getEvents().map((event) => {
            if (event.id === eventId) {
                event.agents.push(agent);
            }
            return event;
        });

        this.saveEvents(modEvents);
    }

    /**
     * @param {Events[]} events
     */
    static saveEvents(events) {
        Storage.set(EVENTS_STORAGE_KEY, events);
        this.events = events;
    }
}