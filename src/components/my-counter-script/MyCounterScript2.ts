import { defineComponent } from "vue";
import { useCounter } from "../../composables/useCounter";

export default defineComponent({
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    setup() {
        const { count, square } = useCounter(5);

        return { count, square };
    }
})

