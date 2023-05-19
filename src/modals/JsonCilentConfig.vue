<template>

<!-- JSON Config ------------------------------------------------------------------------>
<input type="checkbox" id="json-config-modal" class="modal-toggle" />
<div class="modal-wraper"> 

<!-- Start Main -->
<div class="modal-box">
    <header>
        <h3 class="font-bold text-lg ">数据设置</h3>
        <!-- <label for="config-modal" class="g-box">Close</label> -->
    </header>
    <main v-for="(value,key) in jsoncilentstate">
        <label>当前{{key}} : {{ value }}</label>
        <input v-model="jsoncilentstate_temp[key]" placeholder="edit me" />
    </main>
    <footer>
        <button class="g-box" @click="LoadConfig">加载</button>
        <button class="g-box" @click="LoadDefault">默认</button>
        <button class="g-box" @click="SetConfig">应用</button>
        <label for="json-config-modal" class="g-box text-center">关闭</label>
    </footer>
</div>
<!-- End Main -->
</div>

</template>

<script setup>
import { jsoncilentstate,SetProfile } from '../store/store'
import { reactive , ref} from 'vue';

const jsoncilentstate_temp = reactive({
  host:"",
  path:"",
  port:"",
  period:0
})

function LoadConfig() {
    SetProfile(jsoncilentstate,jsoncilentstate_temp)
}
function LoadDefault(){
    jsoncilentstate.SetToDefault(jsoncilentstate_temp)
}
function SetConfig() {
    SetProfile(jsoncilentstate_temp,jsoncilentstate)
}

LoadDefault()
</script>

<!-- Main  -->
<style lang="postcss" scoped>
header {
    @apply flex flex-row w-full justify-between  
}

main {
    @apply   flex-col flex my-1
}

footer {
    @apply flex flex-row  w-full overflow-auto items-center justify-center
}

footer > * {
    @apply  basis-1/4
}

main input{
   @apply text-sea-200 bg-gray-700 rounded-md px-2 py-1
}


</style>


<!-- Modal Relate -->
<style lang="postcss" scoped>  

* {
    @apply text-white
}

.modal-toggle {
    @apply opacity-0 invisible fixed
    
}
.modal-wraper{
    @apply  bg-opacity-50 bg-sea-900
            transition-all 
            
            flex items-center justify-center
            fixed z-50 inset-0
    
            opacity-0 invisible 
            pointer-events-none
            overflow-y-hidden overscroll-contain
}

.modal-toggle:checked + .modal-wraper  {

    @apply  scale-100 opacity-100 visible 
            pointer-events-auto 
            fixed
    
    }


.modal-box {
    @apply  rounded-lg max-w-md w-1/2 bg-gray-800 p-3 shadow-lg 
            flex flex-col 
}

</style>
