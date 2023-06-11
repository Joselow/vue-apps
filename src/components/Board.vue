<script setup>
    import { ref } from "vue";
    import Tag from "./Tag.vue";

const emits = defineEmits(['newItem', 'deleteBoard'])

let titleItem = ref('')
const handleKeydown = (e) => {
    if(e.keyCode !== 13){
        return
    }    
    titleItem.value !== '' 
  ? (emits('newItem', titleItem.value), (titleItem.value = ''))
  : null;
}

const handleDeleteBoard = () => {
    emits('deleteBoard')
}   

</script>

<template>
        <div class="board border border-4 p-4 bg-indigo-200">
            <Tag class="border-none flex justify-end ms-48" style="border: none; padding: 0px; "
                @actionEmit="handleDeleteBoard"
            >
                <template #icon>
                    X
                </template>
            </Tag>
            <slot  name="titleBoard">
                <!-- nombre del tablero -->
            </slot>
            
                <input class="mb-2 flex text-center placeholder-center" type="text" v-model="titleItem" placeholder="Ingresa" @keydown="handleKeydown">
            
            <slot name="itemBoard" >
                  <!-- item del tablero -->
            </slot>
           
        </div>
</template>

<style scoped>
    
</style>