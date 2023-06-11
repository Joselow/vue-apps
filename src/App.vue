<script >

</script>


<template>
<nav class="bg-gray-900">
  <ul class="flex gap-6 py-4 px-6">
    <li>
      <a href="/" class="text-white hover:text-gray-300">Home</a>
    </li>
    <li>
      <a href="/tags" class="text-white hover:text-gray-300">Tags</a>
    </li>
    <li>
      <a href="/kanban-board" class="text-white hover:text-gray-300">Tablero Kanban</a>
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