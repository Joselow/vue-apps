<script setup>
    import { cleanAll, distributeAccoun, formAccount, store } from '@/assets/store/store';
import { ref } from 'vue';
const props = defineProps({
    hiddenButtonClean:{
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['emitCalculatedAccount'])

const validation = ref(null)
const CalculateAccount = () => {
    console.log(formAccount.total);
    if (formAccount.total === '' && formAccount.tip === '' && formAccount.numPeople=== '') {
        validation.value = 'Completa todos los campos porfavor.'
        return
    }

    store.params.total = formAccount.total
    store.params.tip = formAccount.tip
    store.params.numPeople = formAccount.numPeople
    distributeAccoun()
    emits('emitCalculatedAccount')
}

const clean = () => {
    cleanAll()
    formAccount.total = ''
    formAccount.tip = ''
    formAccount.numPeople = ''
}

</script>

<template>
    <div class="">
   <form action="">
    <div class="mb-4">
        <label for="total" class="block text-sm font-medium text-gray-700">S/. Cuenta total</label>
        <input min="0" id="total" type="number" placeholder="S/." class="text-end  mt-1 p-1 border border-gray-300 rounded-md"
            v-model="formAccount.total"
        >
    </div>
    <div class="mb-4">
        <label for="propina" class="block text-sm font-medium text-gray-700">% Porcenataje de Propina</label>
        <input min="0"  id="propina" type="number" placeholder="(%)" class="text-end  mt-1 p-1 border border-gray-300 rounded-md"
            v-model="formAccount.tip"
        >
    </div>
    <div class="mb-1">
        <label for="numPersonas" class="block text-sm font-medium text-gray-700">Número de Personas</label>
        <input min="0" id="numPersonas" type="number" placeholder="0" class="text-end mt-1 p-1 border border-gray-300 rounded-md"
            v-model="formAccount.numPeople"
        >
    </div>

    <div>
        <button class="bg-cyan-400 m-5 p-2 w-40 rounded-lg font-bold text-white" type="button" title="Calcular cuenta"
            @click="CalculateAccount"
        >Calcular</button>
    </div>
    <button  v-if="store.people.length>0 && !hiddenButtonClean" class=" m-5 p-1 bg-violet-600 w-40 rounded-lg text-gray-100" type="button" title="Borrar cuenta y formulario"
        @click="clean"
        >Limpiar todo
    </button>

    <span class="text-red-500" v-if="validation">{{ validation }}</span>
</form>
</div>


</template>

<style scoped>
    
</style>