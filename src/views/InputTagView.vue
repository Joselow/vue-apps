<script >
import Tag from '@/components/Tag.vue'
    export default{
        components: {
            Tag
    },
        emits:['onTags'],
        data(){
            return{
                currentValue: '',
                tags:[]
            }
        },
        computed:{
            insert(){
                return this.tags.length == 0 && this.currentValue == ''? 'Ingresa datita :)' : null
            }
        },  
        methods:{
            print(i){
                console.log("IMPRIMEDO SJJAJASA");
            },
            showTags(){
                console.log("Maneja la datita: ");
                console.log(this.tags)

            },
            handleKeydown(e){
                if ( this.tags.length === 0 ){
                    return
                }
                if ( e.keyCode === 8 ){
                   this.tags.pop() 
                   this.showTags()

                   this.emitTagsEvent()

                }

            },
            handleSubmit(){
                if ( this.currentValue !== '' ){
                    const existTag = this.tags.find(el => el === this.currentValue)
                    
                    return existTag? null : 
                    (this.tags.push(this.currentValue),
                    this.currentValue = '',
                    this.showTags()
                    ,
                    this.emitTagsEvent()
                    )
                }
            },
            deleteTag(i){             
               this.tags.splice(i,1)
               this.focus()
               this.showTags()
               this.emitTagsEvent()


            },
            // Al cargar que este focuseado el elemento input 
            focus(){
                this.$refs.myInput.focus();
            },
            emitTagsEvent() {
                this.$emit('onTags', this.tags);
            },
        },
        mounted() {
            this.focus()
        },
    }
</script>

<template>
    <div class="input-tag">
        <div class="tags">
            <span> {{ insert }} </span>
          
            <Tag :key="i" v-for="(item,i) in tags" @actionEmit="deleteTag(i)">
                <template #content> {{ item }} </template>
                <template #icon> X </template>
            </Tag>

        </div> 

      
        <form action="" @submit.prevent="handleSubmit">
            <input class="input" ref="myInput" v-on:focus="" type="text" v-model="currentValue" @keydown="handleKeydown">
        </form>
    </div>

</template>

<style scoped>
    .input-tag{
        margin-top: 10px;
        border-radius: 15px;
        display: inline-flex;
        border: solid 2px #000 ;
        padding: 6px;
        background: transparent;
        user-select: none;
        background-color: #000;
        width: 90%;
    }

    .tags{
        color: aliceblue;
        display: flex;
        gap: 10px;
        padding: 5px;
        position: relative;
        flex-wrap: wrap;
    }

    form{
        display: inline-flex;
        /* margin-left: 4px;
        margin-right: 20px; */
        padding: 10px 20px 10px 4px;

    }
    .input{
        background: #eee;
        border: none;
        border-radius: 10px;
        outline: none;
        padding: 15px;
        
    }
    span{
        width: 170px;       
        position: absolute;
        margin-top: 18px;
        margin-left: 18px;
        text-align: center;
        color: #333;
        transition: color .1s;
        z-index: 0;
        user-select: none;
        pointer-events: none;
    }

    
</style>