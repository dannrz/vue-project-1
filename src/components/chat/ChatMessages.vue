<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
            <!-- :mine="message.mine" :message="message.message" :image="message.image" -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
    messages: Array<ChatMessage>;
}

const props = defineProps<Props>()
const chatRef = ref<HTMLDivElement | null>(null)

// Opción 1: Usando función getter para observar la prop
watch(() => props.messages.length, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
})
</script>