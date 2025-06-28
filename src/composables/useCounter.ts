import { computed, ref, type ComputedRef, type Ref } from "vue";

export const useCounter = (initialValue: number) => {
    const count: Ref<number> = ref(initialValue ?? 10);
    const square: ComputedRef<number> = computed(() => count.value * count.value);

    return { count, square };
}