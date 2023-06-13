<script setup>
    import {ref} from 'vue'
import { store, distributeAccoun, cleanAll  } from '@/assets/store/store';

let total = ref(125)
let tip = ref(3)
let numPeople = ref(5)

const CalculateAccount = () => {
    console.log('aaaaa');
    store.params.total = total.value
    store.params.tip = tip.value
    store.params.numPeople = numPeople.value
    distributeAccoun()
}

const clean = () => {
    cleanAll()
    total.value = null
    tip.value = null
    numPeople.value = null
}
</script>

<template>
   <form action="">
    <div class="mb-4">
        <label for="total" class="block text-sm font-medium text-gray-700">Total</label>
        <input id="total" type="number" placeholder="S/" class="mt-1 p-1 border border-gray-300 rounded-md"
            v-model="total"
        >
    </div>
    <div class="mb-4">
        <label for="propina" class="block text-sm font-medium text-gray-700">Propina (%)</label>
        <input id="propina" type="number" placeholder="%" class="mt-1 p-1 border border-gray-300 rounded-md"
            v-model="tip"
        >
    </div>
    <div class="mb-1">
        <label for="numPersonas" class="block text-sm font-medium text-gray-700">Número de Personas</label>
        <input id="numPersonas" type="number" placeholder="n°" class="mt-1 p-1 border border-gray-300 rounded-md"
            v-model="numPeople"
        >
    </div>

    <div>
        <button class="bg-cyan-400 m-5 p-2 w-40 rounded-lg font-bold text-white" type="button"
            @click="CalculateAccount"
        >Calcular</button>
    </div>
    <button  v-if="store.people.length>0" class=" m-5 p-2 bg-violet-600 w-40 rounded-lg text-gray-100" type="button"
        @click="clean"
        >Limpiar todo
    </button>
</form>

  

</template>

<style scoped>
    
</style>