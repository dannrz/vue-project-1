import { sleep } from "@/helpers/sleep"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import type { YesNoResponse } from "@/interfaces/yes-no.response"
import { type Ref, ref } from "vue"

export const useChat = () => {
    const messages: Ref<ChatMessage[]> = ref<ChatMessage[]>([])

    const getOthersResponse = async (): Promise<YesNoResponse> => {
        const response = await fetch("https://yesno.wtf/api")

        return await response.json()
    }

    const onMessage = async (text: string) => {
        if (text.length === 0) return

        messages.value.push({
            id: new Date().getTime(),
            message: text,
            mine: true,
        })

        // evaluate the message with an ?
        if (!text.endsWith("?")) return

        await sleep(1.5)
        const { answer, image } = await getOthersResponse()

        messages.value.push({
            id: new Date().getTime() + 1,
            message: answer,
            mine: false,
            image
        })
    }

    return {
        messages,
        onMessage,
    }
}