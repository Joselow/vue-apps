<script setup>
import { ref, watch } from 'vue';

const props = defineProps( {
    nameColor: {
        default:'gray-400',
        type: String,
    },
    play: {
        default:false,
        type: Boolean,
    },
})
const isSelected = ref(false)
const emits = defineEmits(['selectedColor', 'stopPlay']);

const playAudio = () => {
    const audio = new Audio(`colorfulSounds/${props.nameColor}.wav`)
    audio.play()
} 


const select = async() => {
    emits('selectedColor', props.nameColor)
    emits('stopPlay');
    
    isSelected.value = true
    deselect()
    playAudio()
}

const deselect = () =>{
    new Promise( (resolve)  => {
        setTimeout(() => resolve(isSelected.value = false), 200)
    })
}

watch(() => props.play, (newValue) => {
    if (newValue) {
        select()
    }
})
</script>

<template>
        <div :class="{ 'animate__bounceIn ' : isSelected }">
            <button class="w-full py-5" 
                @click="select">
            </button>
        </div>
</template>

<style scoped>
    
</style>