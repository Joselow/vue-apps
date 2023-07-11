<script setup>
       import { useFeedStore } from "@/store/storeRSS.js";

const store = useFeedStore()
</script>

<template>
    <div>
        <h1> {{ store.currentFeed.source.name }} </h1>
    </div>
</template>

<style scoped>
    
</style>