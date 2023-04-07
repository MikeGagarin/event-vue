import EventService from "@/services/event-service";

export function initEvents() {
    if (!EventService.getEvents()) {
        EventService.seedEvents();
    }
}