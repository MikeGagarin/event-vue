<template>
    <div class="wrapper">
        <h1 class="home-header">Мероприятия</h1>
        <div class="event-list">
          <EventBlock v-for="i in 10" v-bind:key="i"></EventBlock>
        </div>
    </div>
</template>

<script>
import EventBlock from "@/components/EventBlock.vue";

export default {
    name: "HomePage",
    components: {EventBlock}
}
</script>

<style scoped>
@import "../assets/css/home.css";
</style>