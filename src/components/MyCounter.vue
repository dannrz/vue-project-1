<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue'

const props = defineProps<{ value?: number }>()
const count: Ref<number> = ref(props.value ?? 10)
const square: ComputedRef<number> = computed(() => count.value * count.value)


</script>

<template>
    <section>
        <h3>Counter {{ count }}</h3>
        <h3>Square {{ square }}</h3>

        <div>
            <button @click="count++">+1</button>
            <button @click="count--">-1</button>
        </div>
    </section>
</template>