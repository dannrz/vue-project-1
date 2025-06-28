<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

interface Props {
    value: number
}

const props = defineProps<Props>()

const { count, square } = useCounter(props.value)


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