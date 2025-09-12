<template>
    <div>
        FIRST REAL PAGE
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { fetchRecentMessages } from "./services/messages-service"

const messagesArray = ref<Array<string>>([]);
let intervalId: NodeJS.Timeout;

onMounted(() => {
    intervalId = setInterval(checkBlueskyData, 5000);
})

onUnmounted(() => {
    clearInterval(intervalId);
})

const checkBlueskyData = async() => {
    console.debug("[checkBlueskyData] Fetching messages from backend")
    const newValue : Array<string> = await fetchRecentMessages();
    console.log("if existing data, update local array of messages")
}

</script>