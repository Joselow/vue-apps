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

const redAudio = new Audio('colorfulSounds/red.wav');
const blueAudio = new Audio('colorfulSounds/blue.wav');
const yellowAudio = new Audio('colorfulSounds/yellow.wav');
const greenAudio = new Audio('colorfulSounds/green.wav');
const isSelected = ref(false)
const emits = defineEmits(['selectedColor', 'stopPlay']);

const select = async() => {
    emits('selectedColor', props.nameColor)
    emits('stopPlay');
    
    isSelected.value = true
    deselect()
    playColor(props.nameColor)
}

const deselect = () =>{
    new Promise( (resolve)  => {
        setTimeout(() => resolve(isSelected.value = false), 200)
    })
}

const playRedAudio =(speed = 1)=> playAudio(redAudio, speed);
const playBlueAudio =(speed = 1)=> playAudio(blueAudio, speed);
const playYellowAudio =(speed = 1)=> playAudio(yellowAudio, speed);
const playGreenAudio =(speed = 1)=> playAudio(greenAudio, speed);


const playAudio = (audio, speed = 1) => {
  try {
    audio.currentTime = 0; 
    audio.playbackRate = speed;
    audio.play();
  } catch (error) {
    console.error('Error playing audio:', error.message);
  }
};

const playColor = (color) => {
  switch (color) {
    case 'red':
    playRedAudio();
      break;
    case 'blue':      
    playBlueAudio();
      break;
    case 'green':      
    playGreenAudio();
      break;
    case 'yellow':      
    playYellowAudio();
      break;
    default:
      console.log('Color no reconocido');
      break;
  }
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