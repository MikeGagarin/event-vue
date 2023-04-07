<template>
    <div class="wrapper">
        <h1 class="home-header">Мероприятия</h1>
        <div class="event-list">
          <EventBlock v-for="event in events" v-bind:key="event.id" :event="event"></EventBlock>
        </div>
    </div>
</template>

<script>
import EventBlock from "@/components/EventBlock.vue";
import EventService from "@/services/event-service";

export default {
    name: "HomePage",
    components: {EventBlock},
    computed: {
        events() {
            return EventService.getEvents();
        }
    }
}
</script>

<style scoped>
@import "../assets/css/home.css";
</style>