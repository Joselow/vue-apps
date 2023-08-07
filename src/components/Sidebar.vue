<script setup>
import { ref } from 'vue';

const collapse = ref(false)
const emits = defineEmits(['clickBar'])
const clickIcon = () => {
    collapse.value = !collapse.value
    emits('clickBar')
}

</script>

<template>
    <!-- <div class="sidebarAtras w-60" :class="[collapse ? 'collapsed' : 'expanded']"></div> -->

    <div class=" h-screen p-4 w-60 container rounded-2xl overflow-auto" :class="[collapse ? 'collapsed' : 'expanded'] ">

        <div class="flex gap-2 h-20">
            <div class="flex gap-3 justify-center items-center ">
                <slot name="img"></slot>
                <slot name="text" v-if="!collapse"></slot>
            </div>

            <div class="">
                <div class="ml-12 hover:cursor-pointer hover:text-orange-200 text-orange-300  " v-if="!collapse" @click="clickIcon">
                    <slot name="icon" class="ml-auto ml-12"></slot>

                </div>
                <div @click="clickIcon" class="hover:cursor-pointer hover:text-orange-300"  v-if="collapse">
                    <slot name="iconSelected" class="ml-auto "></slot>

                </div>

            </div>
        </div>
        <div class="mt-6">

            <slot name="links">

            </slot>

        </div>
    </div>
</template> 

<style scoped>
.container {

    transition: width 0.3s ease-out;
    /* position: fixed; */
    font-weight: bold;
 
}
/* .sidebarAtras{
    transition: width .4s ease-out;

} */
.collapsed {
    width: 80px;
}
</style>