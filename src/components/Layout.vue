<script setup>

</script>

<template>
    <div class="flex gap-3 ">
        <div class="sidebar  min-h-screen ">
            <slot name='sidebar'>
            </slot>
        </div>

        <div class="content flex gap-3 flex-col  w-full mr-2">
            <div class="card contentHeader w-full h-24 rounded-xl border-2">
                <slot name='headerContent'>
                   
                </slot>
            </div>

            <div class="card flex flex-grow items-start justify-center">
                <div class="w-full rounded-lg ">
                    <slot name='mainContent'>

                    </slot>
                </div>
            </div>

            <div class="card  h-20 rounded-xl ">
                <slot name='footerContent'>
                   
                </slot>
            </div>
        </div>

    </div>
</template>

<style scoped> 

.sidebar {
     background-color: var(--color-text);
     color: var(--color-sidebarText);
 }

 .card {
     background: var(--color-cardBackground)
 }
 
 </style>