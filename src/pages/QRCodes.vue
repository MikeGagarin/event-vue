<template>
    <canvas v-for="agent in agents" v-bind:key="agent.id" :id="agent.id"></canvas>
</template>

<script>
import UserService from "@/services/user-service";
import QRCode from "qrcode";

export default {
    name: "QRCodes",
    computed: {
        agents() {
            return UserService.getAgentUsers();
        }
    },
    mounted() {
        this.agents.forEach((agent) => {
            let canvas = document.getElementById(agent.id)
            QRCode.toCanvas(canvas, agent.id.toString(), function (error) {
                if (error) console.error(error)
                console.log('success!');
            });
        })
    }
}
</script>

<style scoped>

</style>