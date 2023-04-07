<template>
    <video class="scanner"></video>
</template>

<script>
import QrScanner from "qr-scanner";
import EventService from "@/services/event-service";

export default {
    name: "QRScanPage",
    props: ['id'],
    mounted() {
        let videoElem = document.getElementsByClassName('scanner')[0];
        const qrScanner = new QrScanner(
            videoElem,
            result => {
                qrScanner.stop();
                EventService.assignAgentToEvent(this.$props.id, result);
                this.$router.replace({name: 'event', params: {'id': this.$props.id}});
            }
        );
        qrScanner.start();
    }
}
</script>

<style scoped>
.scanner {
    width: 100%;
    height: 100%;
}
</style>
