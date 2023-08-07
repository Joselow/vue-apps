<script setup>

const emits = defineEmits(['closeEmit'])

const closeModal = () => {
    emits('closeEmit')
}

</script>

<template>
    
<div class="fixed inset-0 flex items-start justify-center bg-gray-900 bg-opacity-75 z-10	">
  <div class="mt-12 bg-white rounded-lg shadow-lg p-6 w-80 relative">
    <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        @click="closeModal" 
    >
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <div class="text-center">
      <slot name="formModal" >

</slot>
    </div>
    

  </div>
</div>  
</template>

<style scoped>
    
</style>