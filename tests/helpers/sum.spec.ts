import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'

describe("add function", () => {
    test('adds 1 + 2 to equal 3', () => {
        const a = 1
        const b = 2

        // estimulo
        const result = sum(a, b)

        // comportamiento esperado
        expect(result).toBe(a + b)
        // expect(sum(1, 2)).toBe(3)
    })
})

describe("add function for arrays", () => {
    test("adds for arrays", (): void => {
        const arr = [1, 2, 3, 4, 5]

        // estimulo
        const result = addArray(arr)

        // comportamiento esperado
        expect(result).toBe(15)
    })

    test("adds for arrays with empty array", (): void => {
        const arr: Array<number> = []

        // estimulo
        const result = addArray(arr)

        // comportamiento esperado
        expect(result).toBe(0)
    })
})