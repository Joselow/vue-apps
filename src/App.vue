<script setup>
import Layout from './components/Layout.vue';

import { ref } from 'vue';

const items = ref([
  {
    icon: 'fa-sharp fa-solid fa-tags',
    name: 'Etiquetas',
    path: 'tags'
  },
  {
    icon: 'fa-brands fa-flipboard',
    name: 'Tablero Kanban',
    path: 'kanban-board'
  },
  {

    icon: 'fa-sharp fa-solid fa-file-invoice-dollar',
    name: 'Divir Cuenta',
    path: 'split-account'
  },
  {
    icon: 'fa-sharp fa-solid fa-file-invoice-dollar',
    name: 'Simón dice',
    path: 'simon-says'
  }
])

</script>


<template>
  <Layout >
    <template #sidebar>
      <RouterLink v-for="item in items" :to="{ name: item.path }"
        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        {{ item.name }}
      </RouterLink>
    </template>    
    <template #mainContent>
      <div class=" flex justify-center align-center ">
        <div class="mt-20">
          <router-view></router-view>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>

.router-link-exact-active {
  color: #fff ;
  background: #000;
}
</style>