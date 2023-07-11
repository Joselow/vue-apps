<script setup>
import ItemsSB from "@/components/ItemsSB.vue";
import SideBar from "@/components/SideBar.vue";
import Layout from './components/Layout.vue';

import { ref } from 'vue';

const collapse = ref(false)
const items = ref([
  {
    icon: 'fa-solid fa-house',
    name: 'Casa',
    path: 'home'
  },
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
  }
])




</script>


<template>
  <Layout>
    <template #sidebar>



      <SideBar @clickBar="collapse = !collapse">
        <template #img>
          <img src="./assets/img/a.png" alt="Girl in a jacket" width="80"
            class=" rounded-full max-w-full align-middle border-none ">
        </template>

        <template #text>
          <div class="mt-1"> Joselow
          </div>
        </template>

        <template #icon>
          <div class=""> <i class="fa-solid fa-circle-check"></i>
          </div>
        </template>

        <template #iconSelected>
          <div class=""> <i class="fa-regular fa-circle"></i>
          </div>
        </template>

        <template #links>


          <RouterLink v-for="item in items" :to="{ name: item.path }" >
            <div>
              <ItemsSB  class="hover:bg-zinc-900">
              <template #iconItem>
             
                  <i :class="item.icon"></i>

              </template>

                <template #textItem>
                  <Transition>

                <div v-if="!collapse">
                  {{ item.name }}
                </div>
              </Transition>
              </template>
              
              
            
            </ItemsSB>
            </div>
            
          </RouterLink>
         
        </template>

      </SideBar>


    </template>
    <template #headerContent>

    </template>
    <template #mainContent>
      <div class="flex justify-center align-center ">
        <div>
          <router-view></router-view>
        </div>
      </div>

    </template>
    <template #footerContent>

    </template>



  </Layout>
</template>

<style scoped>
.collapsed{
  transition: 0.3s ease;
  font-size: 18px;
}
.router-link-exact-active {
  color: #ff8e3c ;
}


.v-enter-active {
  transition: opacity 4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>