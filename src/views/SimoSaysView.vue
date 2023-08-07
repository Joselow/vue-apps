<script setup>
    import { computed, ref } from 'vue';
import Color from '../components/Color.vue';

const initialIndex = -1;
const initialLevel = 0;
const isInGame = ref( null);
const turnPlayer = ref(null);
const nameColors = ['red', 'green', 'yellow' ,'blue'] ;
const computersColors = ref([]);
const turnColor  = ref(false);
const level  = ref(initialLevel);
const colorIndex = ref(initialIndex);

const startGame = () => {
    isInGame.value = true
    level.value++
    play(1000)
}

const timeLapse = (milisecods) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), milisecods);
    })
}

const play = async(milisecodsLapse) => {
    turnPlayer.value = 'COMPUTER'
    
    addComputersColors(getRandomColor())
    
    for (let element of computersColors.value) {
        await new Promise(resolve => {
            setTimeout(() => resolve(turnColor.value = element), milisecodsLapse);
        });
    }
    turnPlayer.value = 'CHALLENGER';    
}


const selectColor = async(color) => {
    if( turnPlayer.value !== 'CHALLENGER') return
    
    colorIndex.value++ 
    const assertTheColor = compareColors(color)

    if(!assertTheColor){
        restartGame()
        return
    } 
    
    if( colorIndex.value  === computersColors.value.length-1  ){      
        level.value++
        colorIndex.value = -1        
        level.value >= 5 ?  await timeLapse(500) : await timeLapse(1500);
        level.value >= 5 ?  play(500): play(1000);
        console.log('gano la ronda');
    }
    
}


const getRandomColor = () => {
    const randomNum = Math.floor(Math.random() * nameColors.length);
    return nameColors[randomNum];
}

const addComputersColors = (color) => {
     computersColors.value.push(color)
}

const compareColors = (color) => {
        const colorOfComputer = computersColors.value[colorIndex.value]
        console.log(colorIndex.value);
        console.log(color);
        console.log(colorOfComputer);

        if(color !== colorOfComputer ) return false          
        return true
}

const restartGame = () => {
    isInGame.value = false;        
    colorIndex.value  = initialIndex;
    level.value = initialLevel;  
    computersColors.value = [];
}

const stopPlay = () => {
    turnColor.value = 'none';
}

const showMsgLose = computed(() => {    
    if(isInGame.value === false){
        return 'Perdiste manquito'
    }
    else if(isInGame.value === true){
        return 'En juego'
    }
    return 'Suerte Manquito'
}) 

</script>

<template>
    <div id="simon-game" class="relative w-96 bg-gray-800 shadow-lg p-6 rounded-lg">
    <h6 class="text-gray-300  absolute top-2 right-3" v-show="isInGame">Nivel {{ level }}</h6>
      <h1 class="text-2xl font-semibold mb-4 text-white text-center">Simón Dice</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2">
          <button id="start-btn" class="w-full py-2  mb-3 bg-violet-600 text-white font-semibold rounded-lg"
            @click="startGame()"
            :disabled="isInGame"
            :class="{ 'opacity-60' :  isInGame}">
                Iniciar 
            </button>
        </div>
        <Color class="bg-red-500 rounded-lg" nameColor="red" @selectedColor="selectColor" :play="turnColor === 'red' ? true : false" @stopPlay="stopPlay"></Color>
        <Color class="bg-blue-500 rounded-lg" nameColor="blue"  @selectedColor="selectColor" :play="turnColor === 'blue' ? true : false" @stopPlay="stopPlay"></Color>
        <Color class="bg-green-500 rounded-lg" nameColor="green"  @selectedColor="selectColor" :play="turnColor === 'green' ? true : false" @stopPlay="stopPlay"></Color>
        <Color class="bg-yellow-500 rounded-lg" nameColor="yellow" @selectedColor="selectColor" :play="turnColor === 'yellow' ? true : false" @stopPlay="stopPlay"></Color>
      </div>
      <div id="message" class="mt-6 text-center text-gray-300 font-bold rounded-lg">
        {{showMsgLose}}
       </div>
  </div>
</template>

<style scoped>
    
</style>