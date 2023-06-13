<script >
import { RouterLink } from 'vue-router';


</script>


<template>
<nav class="bg-gray-900">
  <ul class="flex gap-6 py-4 px-6">
    <li>
      <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/tags" class="text-white hover:text-gray-300">Tags</RouterLink>
    </li>
    <li>
      <RouterLink to="/kanban-board" class="text-white hover:text-gray-300">Tablero Kanban</RouterLink>
    </li>
    <li>
      <RouterLink to="/split-account" class="text-white hover:text-gray-300">Dividir Cuentas</RouterLink>
    </li>
  </ul>
</nav>


  <!-- <InputTag @onTags="handleTags" />  -->
  <!-- <router-view @onTags="handleTags" ></router-view> -->
  <div class="flex justify-center align-center ">
    <div>
    <router-view></router-view>
    </div>
  </div>

</template>

<style scoped>


  
</style>