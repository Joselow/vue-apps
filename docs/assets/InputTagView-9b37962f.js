import{T as h}from"./Tag-c000848b.js";import{_ as m,r as p,o,c as u,a,t as l,F as T,b as f,w as _,v,d as w,e as V,f as g,g as c}from"./index-471bf63f.js";const y={components:{Tag:h},emits:["onTags"],data(){return{currentValue:"",tags:[]}},computed:{insert(){return this.tags.length==0&&this.currentValue==""?"Ingresa datita :)":null}},methods:{print(s){console.log("IMPRIMEDO SJJAJASA")},showTags(){console.log("Maneja la datita: "),console.log(this.tags)},handleKeydown(s){this.tags.length!==0&&s.keyCode===8&&(this.tags.pop(),this.showTags(),this.emitTagsEvent())},handleSubmit(){if(this.currentValue!=="")return this.tags.find(t=>t===this.currentValue)?null:(this.tags.push(this.currentValue),this.currentValue="",this.showTags(),this.emitTagsEvent())},deleteTag(s){this.tags.splice(s,1),this.focus(),this.showTags(),this.emitTagsEvent()},focus(){this.$refs.myInput.focus()},emitTagsEvent(){this.$emit("onTags",this.tags)}},mounted(){this.focus()}},x={class:"input-tag"},E={class:"tags"};function I(s,t,S,b,i,n){const d=p("Tag");return o(),u("div",x,[a("div",E,[a("span",null,l(n.insert),1),(o(!0),u(T,null,f(i.tags,(e,r)=>(o(),V(d,{key:r,onActionEmit:k=>n.deleteTag(r)},{content:g(()=>[c(l(e),1)]),icon:g(()=>[c(" X ")]),_:2},1032,["onActionEmit"]))),128))]),a("form",{action:"",onSubmit:t[3]||(t[3]=w((...e)=>n.handleSubmit&&n.handleSubmit(...e),["prevent"]))},[_(a("input",{class:"input",ref:"myInput",onFocus:t[0]||(t[0]=()=>{}),type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.currentValue=e),onKeydown:t[2]||(t[2]=(...e)=>n.handleKeydown&&n.handleKeydown(...e))},null,544),[[v,i.currentValue]])],32)])}const B=m(y,[["render",I],["__scopeId","data-v-a29a6839"]]);export{B as default};