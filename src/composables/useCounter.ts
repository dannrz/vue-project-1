import { computed, ref, type ComputedRef, type Ref } from "vue";

export const useCounter = (initialValue: number = 10) => {
    const count: Ref<number> = ref(initialValue);
    const square: ComputedRef<number> = computed(() => count.value * count.value);

    return { count, square };
}