import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

const messages: Array<ChatMessage> = [
    { id: 1, message: "Hola", mine: true },
    { id: 2, message: "mundo", mine: false, image: "https://example.com/image.png" }
];

describe("ChatMessages component", () => {
    it("should render messages correctly", () => {
        const wrapper: VueWrapper = mount(ChatMessages, {
            props: {
                messages
            }
        })

        
    });
})