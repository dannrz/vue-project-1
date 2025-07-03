import { useCounter } from "@/composables/useCounter";
import { describe, expect, it } from "vitest";

describe("useCounter", () => {
    it("initialize counter with default values", () => {
        // const initialValue = 10;
        const { count, square } = useCounter();

        expect(count.value).toBe(10);
        expect(square.value).toBe(10 * 10);
    });

    it("initialize counter with provided value", () => {
        const initialValue = 10;
        const { count, square } = useCounter(initialValue);

        expect(count.value).toBe(initialValue);
        expect(square.value).toBe(initialValue * initialValue);
    });

    it('increments counter correctly', () => {
        // const initialValue = 10;
        const { count, square } = useCounter();

        count.value++;

        expect(count.value).toBe(11);
        expect(square.value).toBe(11 * 11);
    })
})