<script setup>
    import { store, getTotalPlusTip, getPendingToPay, pay  } from '@/assets/store/store.js'
    import { ref } from 'vue'
    import Tag from './Tag.vue';

const statePay = ref(false)

const paid = (id, valuePaid) => {
    statePay.value = valuePaid
    pay(id, valuePaid)
}

</script>

<template>
    <template v-if="store.people.length === 0" >
        <div class="bg-red-300 text-center font-bold text-xl rounded-lg p-2">
        No hay cuenta
    </div>
    </template>
    
    <template v-else>
        <div class="p-2 grid grid-cols-3 rounded-md mb-4 text-white ps-12 bg-sky-700">
            <div>
                Total + Propina: S/
                <span class="text-gray-300 font-bold text-xl"> {{ getTotalPlusTip() }} </span> 
            </div>
            <div></div>
            <span class="text-black font-bold rounded-md text-white text-center bg-sky-100 text-lg "
            v-if="getPendingToPay() === 0">  
                CUENTA SALDADA !!
            </span> 
        </div>

        <div class="p-2 rounded-md mb-4 text-white ps-12 bg-sky-800 text-lg ">
           Falta pagar: S/
           <span class="text-rose-300 font-bold"> {{ getPendingToPay() }} </span> 
        </div>
      
        

        <div class="mb-6 flex flex-wrap gap-6 justify-center" >
            <div class="border bg-gray-500 flex flex-col gap-1" v-for="item in store.people">
                <div class="p-4 bg-rose-300  w-64">
                    Persona {{ item.numPerson }}
                </div>

                <div class="p-4 bg-rose-300 text-center text-lg font-bold" :class="[getPendingToPay() === 0? 'text-lime-700' : null]">
                    S/ {{ item.toPay }}
                </div>

                <div class="p-4 bg-rose-300">
                    <Tag class="bg-gray-900 "
                        @actionEmit="paid(item.id, true)"
                        v-if="!item.paid"
                    >
                        <template #icon > 
                            <span> ✔ Pagar </span>
                        </template>
                    </Tag>
                        <Tag class="p-1 text-center bg-cyan-400 border-none"   style="border-radius: 12px;"
                        @actionEmit="paid(item.id, false)"
                        v-if="item.paid"
                    >
                        <template #content > 
                            <span class="text-gray-900 ps-6">  
                                PAGADO
                            </span>
                        </template>
            
                        <template #icon> 
                            <span class="text-xl font-bold"> 
                                X 
                            </span>
                        </template>
                    </Tag>
                </div>
            </div>
        </div>

        

    </template>

  
</template>

<style scoped>
</style>