<template>
    <section>
        <h3>Counter {{ count }}</h3>
        <h3>Square {{ square }}</h3>

        <div>
            <button class="p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700" @click="count++">+1</button>
            <button class="p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700" @click="count--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>