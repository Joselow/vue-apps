<script setup>
import { useFeedStore } from "@/store/storeRSS.js";
import { ref } from 'vue';
    
const store = useFeedStore()
const url = ref("")

const handleSubmit = () => {
    if(url.value !== ''){
        store.registerNewSource(url.value)
    }
}

</script>

<template>
    <div >
        <form action="" @submit.prevent="handleSubmit">
            <input type="url"  v-model="url"
            class="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none  focus:border-orange-500">
  
            <button class="p-2 bg-lime-300 rounded" >Añadir Fuente</button>
        </form>
    </div>
</template>

<style scoped>
    
</style>