<script setup>
import { cleanAll, formAccount, store } from '@/store/store';
import { ref } from 'vue';
import Account from '../components/Account.vue';
import FomAccount from '../components/FomAccount.vue';
import Modal from '../components/Modal.vue';
const showModal = ref(false)
const closeModal = () => {
  showModal.value = false
}

const clean = () => {
  cleanAll()
  formAccount.total = ''
  formAccount.tip = ''
  formAccount.numPeople = ''
}
</script>

<template>
  <Transition>

  <Modal v-show="showModal" @closeEmit="closeModal">
    <template #formModal>
      <FomAccount :hiddenButtonClean="true" @emitCalculatedAccount="closeModal"></FomAccount>
    </template>
  </Modal>
</Transition>

  <div class="flex flex-wrap justify-center">
    <button class="bg-cyan-400 m-5 p-2 w-32 rounded-lg font-bold text-white hidden max-[1024px]:block" type="button"
      @click="showModal = true">Nuevo Calculo</button>

    <button class=" m-5 p-1 bg-violet-600 w-32 rounded-lg text-gray-100 hidden max-[1024px]:block " type="button"
      @click="clean" v-if="store.people.length > 0">Limpiar todo
    </button>
  </div>


  <div class="grid grid-cols-7 mt-12 gap-12 items-center justify-center max-[600px]:mt-0">

    <div class="form-account  text-center col-span-2 max-[1024px]:hidden">
      <FomAccount></FomAccount>
    </div>
    <div class="accounts col-span-5 max-[1024px]:col-span-7 ">
      <Account></Account>
    </div>
  </div>
  
</template>

<style scoped>


.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>