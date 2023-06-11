<script>
export default {
  emits:['actionEmit'],
  methods:{
    action(){
      this.$emit('actionEmit')
    }
  }
}
</script>

<template>
     <div class="tag"> 
         <slot name="content"/>   
         <button @click="action(i)">
          <slot name="icon"/>   
        </button>
    </div>


</template>

<style scoped>
      .tag{
        display: flex;
        padding: 5px;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #999;
        border-radius: 3px;
    }

    button{
        font-size: larger;
        background: transparent;
        border: none;
        cursor: pointer;
        margin-left: 3px;
        color: #999;

    }
    button:hover{
        color: #a5ffbc;
        font-weight: bold;
        border-radius: 3px;
    }
</style>