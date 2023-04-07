<template>
    <div class="wrapper">
        <h1 class="home-header">{{ event.emoji }} {{ event.title }}</h1>
        <AuthorInfo :author="event.author"></AuthorInfo>
        <h3 class="assigned-header">Подтвержденные агенты:</h3>
        <div class="assigned-agent">
            <AuthorInfo v-for="agent in event.agents" :author="agent" v-bind:key="agent"></AuthorInfo>
        </div>
    </div>
</template>

<script>
import EventService from "@/services/event-service";
import AuthorInfo from "@/components/AuthorInfo.vue";

export default {
    name: "EventPage",
    components: {AuthorInfo},
    props: ['id'],
    computed: {
        event() {
            return EventService.getEventById(this.id);
        }
    }
}
</script>

<style scoped>

</style>