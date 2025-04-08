<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';


const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'Hola, ¿cómo estás?',
        mine: true,
    },
    {
        id: new Date().getTime(),
        message: '¿Quieres ir a tomar café?',
        mine: true,
    },
    {
        id: new Date().getTime() + 1,
        message: 'Si',
        mine: false,
        image: 'https://yesno.wtf/assets/no/4-122be48db47678331dbef3dd6ac6ff56.gif'
    },
])

const onMessage = (text: string) => {
    messages.value.push({
        id: new Date().getTime(),
        message: text,
        mine: true,
    })
}

</script>

<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi esposa</span>
        </div>

        <!--  Chat messages-->
        <ChatMessages :messages="messages" />
        <MessageBox @send-message="onMessage($event)" />
    </div>
</template>