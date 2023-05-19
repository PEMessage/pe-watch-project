<template>
<input type="checkbox" id="config-modal" class="modal-toggle" />
<div class="modal-wraper"> 

<!-- Start Main -->
<div class="modal-box">
    <header>
        <h3 class="font-bold text-lg ">数据设置</h3>
        <label for="config-modal" class="g-box">Close</label>
    </header>
    <main>
        <input type="text" v-model="jsoncilentstate_temp.host"  class="text-black">
    </main>
    <header>
        <h3 class="font-bold text-lg">视频流设置</h3>
        <label for="config-modal" class="g-box">Close</label>
    </header>

    <h3 >Hi</h3>
    <p class="py-4">This is</p>
</div>
<!-- End Main -->

</div>
</template>

<script setup>
import {jsoncilentstate} from '../store/store'
import { reactive } from 'vue';

const jsoncilentstate_temp = reactive({
  host:"http://localhost" ,
  path:"/api",
  port:"8003",
  period:250
})

</script>

<!-- Main  -->
<style scoped>
header {
    @apply flex flex-row w-full justify-between items-center
}

</style>


<!-- Modal Relate -->
<style scoped>  

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
    @apply  rounded-md max-w-md w-1/2 bg-gray-800 p-3 shadow-lg 
            flex flex-col
}

</style>
