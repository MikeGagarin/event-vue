<template>
    <div class="container">
        <h3 class="event-title">{{ emoji }} {{ event.title }}</h3>
        <p>Мероприятие намечено на {{ event.startDate }}</p>
        <div class="event-footer">
            <div class="author-info">
                <div class="avatar" :style="avatarColor">{{ event.author.name[0] }}</div>
                <span>{{ event.author.name }}</span>
            </div>
            <button class="btn-submit">Посмотреть</button>
        </div>
    </div>
</template>

<script>
import Helpers from "@/services/helpers";
import Event from "@/models/event";

export default {
    name: "EventBlock",
    props: {
        event: Event
    },
    computed: {
        avatarColor() {
            let hexColor = Helpers.getAvatarRandomColor();
            return 'background-color:' + hexColor
        },
        emoji() {
            return Helpers.getRandomEmojis();
        }
    }
}
</script>

<style scoped>
@import "../assets/css/event.css";
</style>