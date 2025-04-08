import { computed, ref } from "vue";

export const useCounter = (initialValue: number) => {
    const count = ref(initialValue);
    const square = computed(() => count.value * count.value);

    return { count, square };
}