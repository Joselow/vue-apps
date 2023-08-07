<script setup>
const props = defineProps({
    collapse :{
        typeof: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="flex gap-3 ">
        <div class="sidebar  min-h-screen ">
            <slot name='sidebar'>
               
            </slot>
        </div>

        <div class="content min-h-screen  flex gap-3 flex-col  w-full mr-2" :class="[collapse? 'contentCollapsed' : null]">
            <div class="card  border-none text-center p-2 w-full h-24 rounded-xl " :class="[ collapse ?'sizeFixedHeader' : 'contentHeader']">
                <slot name='headerContent'>
                    By joselow
                </slot>
            </div>
            <div class=" hidecontentHeader w-full h-24 rounded-xl " >
            </div>

            <div class="card contentMain  flex flex-grow items-start justify-center ">
                <div class="w-full rounded-lg ">
                    <slot name='mainContent'>

                    </slot>
                </div>
            </div>

            <div class=" card text-center  p-2 h-16 rounded-xl" :class="[ collapse ?'sizeFixedFooter' : 'contentFooter']">
                <slot name='footerContent'>
                    By joselow
                </slot>
            </div>
        </div>

    </div>
</template>

<style scoped> 
.content{
    margin-left: 250px;
    transition: margin .2s ease;
}
.contentCollapsed{
    transition: margin .7s ease; 
    margin-left: 90px;
}
.sizeFixed{
    width: calc(100% - 50px);
}
.sidebar {
    height: 100vh;
    position: fixed;
    z-index: 1;
     background-color: var(--color-text);
     color: var(--color-sidebarText);
 }
 .contentHeader{
    transition: width .2s;
    position: fixed;
    top: 0;
    width: calc(100% - 256px);
    z-index: 5;
     margin-top: 20px;

 }
.hidecontentHeader{
    position: fixed;
    top: 0;
    z-index: 3;
    background-color: #eff0f3;

}
 .sizeFixedHeader{
    transition: width .6s;
    position: fixed;
    top: 0;
    z-index: 5;
    width: calc(100% - 100px);     
    margin-top: 20px;

 }
 .sizeFixedFooter{
    transition: width .6s;
    position: fixed;
    bottom: 0;
    width: calc(100% - 100px);
    z-index: 1;
 }

 .contentMain{
    margin-bottom: 75px ;
    margin-top: 125px  ;
 }

 .contentFooter {
    transition: width .2s;
    position: fixed;
    bottom: 0;
    width: calc(100% - 260px);
    z-index: 1;
 }

 .card {
     background: var(--color-cardBackground)    
 }

 
 </style>