<script setup>
    import {reactive, ref, defineAsyncComponent } from 'vue'
    import Board from '../components/Board.vue';
    import Tag from "../components/Tag.vue";
    // import Modal from '../components/Modal.vue';

const Modal = defineAsyncComponent(() =>
    import('../components/Modal.vue')
);

let boards = reactive([
        {
            id: crypto.randomUUID(),
            name: 'Tablero 1',
            items: [
                {
                    id: crypto.randomUUID(),
                    title: 'Programa papu'
                },
                {
                    id: crypto.randomUUID(),
                    title: 'Cambiame de tablero'
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            name: 'Tablero 2',
            items: [
                {
                    id: crypto.randomUUID(),
                    title: 'Modo Guerra'
                },
                {
                    id: crypto.randomUUID(),
                    title: 'Ami ni me toques'
                }
            ]
        },
    ])  

let nameBoard = ref('')
let showBoardModal = ref(false)

const openBoardModal = () => {
    showBoardModal.value = true
    nameBoard.value = ''
}

const handleSaveBoard = () => {
    if (nameBoard.value === '') return
    const existBoar = boards.find(el => el.name === nameBoard.value)
    if( existBoar ) return
    if( nameBoard.value == '' ) return

    boards.push({
        id: crypto.randomUUID(),
        name: nameBoard.value,
        items: []
    })
    setTimeout(()=> showBoardModal.value = false,150)
}

const handleDeleteBoard = (index) => {
    boards.splice(index,1 )
}  


const handleSaveItem = (item, board) => {
    board.items.push({
        id: crypto.randomUUID(),
        title: item
    })
}
const handleDeleteItem = ( board,index) => {
    board.items.splice( index,1)
}



const startDrag = (event, board, item ) => {
    const data = {
        idBoard: board.id,
        idItem: item.id
    }
    event.dataTransfer.setData('application/json', JSON.stringify(data))
}

const onDrop = (event, targetBoard) => {
    const { idBoard, idItem } = JSON.parse(event.dataTransfer.getData('application/json'))

    const originBoard = boards.find(el => el.id === idBoard)
    const originItem = originBoard.items.find(el => el.id === idItem)

    //agregar
    targetBoard.items.push(originItem)

    //eliminar
    const indexID =  originBoard.items.findIndex(el => el.id === idItem )
    originBoard.items.splice(indexID, 1)
}

</script>

<template>
    <Teleport to="body">
        <Modal v-show="showBoardModal" @closeEmit="showBoardModal=false"> 
            <template #formModal>
                 <h2 class="text-2xl font-bold mb-4">Ingresa un nombre</h2>
                <form class="flex" @submit.prevent>
                <div class="mr-2">
                    <input type="text" id="nameInput" placeholder="Nombre" class="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        v-model="nameBoard"
                    >
                </div>
                <button type="button" class="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    @click="handleSaveBoard"
                >Agregar</button>
                </form>
            </template>
        </Modal>
    </Teleport>
   
    <div class="flex justify-center align-center">
        <button class="bg-cyan-400 m-5 p-2 w-40 radius rounded-lg font-bold"
            @click="openBoardModal"    
        >
        <h3>Crear Tablero</h3>
        </button>
    </div>
   

        <div class="boards flex flex-wrap gap-5">            
            <Board v-for="(board, index) in boards" :key="board.id" @newItem="(item) => handleSaveItem(item, board)"
                @deleteBoard="handleDeleteBoard(index)"
                @drop="onDrop($event, board)"
                @dragover.prevent
                @dragenter.prevent
            >
                <template #titleBoard>
                    <span class="font-bold"> {{ board.name }} </span> 
                </template>

                <template #itemBoard >                  
                    <Tag  v-for="(item, index) in board.items" class="bg-indigo-600 m-1" @actionEmit="handleDeleteItem(board, index)"
                        draggable="true"
                        @dragstart="startDrag($event, board, item)"
                    >
                        <template #content> 
                            <div class="  p-2 text-slate-100">
                            <span> {{ item.title  }} </span>
                        </div>
                        </template>
                        <template #icon> X </template>
                    </Tag>
                </template>
            </Board>

      
    </div>
</template>

<style scoped>
    
</style>