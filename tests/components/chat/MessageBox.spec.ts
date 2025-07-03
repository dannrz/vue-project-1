import MessageBox from "@/components/chat/MessageBox.vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("MessageBox", () => {
    const wrapper: VueWrapper = mount(MessageBox)

    it("should render input and button elements", () => {
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find("input[type='text']").exists()).toBeTruthy();
        expect(wrapper.find("button").exists()).toBeTruthy();
        expect(wrapper.find("button svg").exists()).toBeTruthy();
    });

    it("emits sendMessage event with input value on button click", async (): Promise<void> => {
        const message: string = "Hola mundo"

        await wrapper.find("input[type='text']").setValue(message);
        await wrapper.find("button").trigger("click");

        expect(wrapper.emitted("sendMessage")?.[0]).toEqual([message]);
    })

    it("emits sendMessage when key.press.enter is triggered", async (): Promise<void> => {
        const message: string = "Hola mundo"
        const newWrapper: VueWrapper = mount(MessageBox)

        const input = newWrapper.find("input[type='text']")
        await input.setValue(message);

        await input.trigger("keypress.enter");

        expect(newWrapper.emitted("sendMessage")?.[0]).toEqual([message]);
    })

    it("emits sendMessage event with input value on button click", async (): Promise<void> => {
        const newWrapper2: VueWrapper = mount(MessageBox)

        newWrapper2.find("input[type='text']")
        // await input.setValue(message);

        expect(newWrapper2.emitted("sendMessage")).toBeFalsy()
    })
})