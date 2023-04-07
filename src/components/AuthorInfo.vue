<template>
    <div class="author-info">
        <div class="avatar" :style="avatarColor">{{ author.name[0] }}</div>
        <span>{{ author.name }}</span>
    </div>
</template>

<script>
import User from "@/models/user";
import Helpers from "@/services/helpers";

export default {
    name: "AuthorInfo",
    props: {
        author: User
    },
    computed: {
        avatarColor() {
            let hexColor = Helpers.getAvatarRandomColor();
            return 'background-color:' + hexColor
        }
    }
}
</script>

<style scoped>

</style>