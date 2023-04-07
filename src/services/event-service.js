import { faker } from '@faker-js/faker';
import Event from "@/models/event";
import UserService from "@/services/user-service";
import Storage from "@/services/storage";

const EVENTS_STORAGE_KEY = 'events';
export default class EventService {
    static seedEvents() {
        let events = [];

        for (let i = 0; i < 10; i++) {
            let event = new Event({
                title: faker.commerce.productName(),
                startDate: faker.date.future(2023).toLocaleDateString(),
                author: UserService.getAdminUser()
            });
            events.push(event);
        }

        return events;
    }

    static getEvents() {
        let events = Storage.get(EVENTS_STORAGE_KEY, null);

        if (!events) {
            events = this.seedEvents();
            Storage.set(EVENTS_STORAGE_KEY, events);
        }

        return events;
    }
}