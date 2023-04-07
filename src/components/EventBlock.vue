<template>
    <div class="container">
        <h3 class="event-title">{{ event.emoji }} {{ event.title }}</h3>
        <p>Мероприятие намечено на {{ event.startDate }}</p>
        <div class="event-footer">
            <AuthorInfo :author="event.author"></AuthorInfo>
            <button class="btn-submit" @click="showEvent(event.id)">Посмотреть</button>
        </div>
    </div>
</template>

<script>
import Event from "@/models/event";
import AuthorInfo from "@/components/AuthorInfo.vue";

export default {
    name: "EventBlock",
    components: {AuthorInfo},
    props: {
        event: Event
    },
    methods: {
        showEvent(id) {
            this.$router.push({name: 'event', params: {id}})
        }
    }
}
</script>

<style scoped>
@import "../assets/css/event.css";
</style>