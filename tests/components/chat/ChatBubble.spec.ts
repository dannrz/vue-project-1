import ChatBubble from "@/components/chat/ChatBubble.vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("ChatBubble", (): void => {
    it("should render correctly", (): void => {
        const message: string = "Hola mundo";
        const wrapper: VueWrapper = mount(ChatBubble, {
            props: {
                message,
                mine: true
            }
        })

        expect(
            wrapper.find(".bg-blue-200").exists()
        ).toBeTruthy()
        expect(
            wrapper.find(".bg-blue-200").text()
        ).toContain(message)
        expect(
            wrapper.find(".bg-gray-300").exists()
        ).toBeFalsy()
    });

    it("should render correctly when not mine", (): void => {
        const message: string = "Hola mundo";
        const image: string = "https://example.com/image.jpg";

        const wrapper: VueWrapper = mount(ChatBubble, {
            props: {
                message,
                mine: false,
                image
            }
        })

        expect(
            wrapper.find(".bg-gray-300").exists()
        ).toBeTruthy()
        expect(
            wrapper.find(".bg-gray-300").text()
        ).toContain(message)
        expect(
            wrapper.find(".bg-blue-200").exists()
        ).toBeFalsy()
        expect(
            wrapper.find("img").exists()
        ).toBeTruthy()
        expect(
            wrapper.find("img").attributes('src')
        ).toBe(image)

    });
});