


<template> <div class="g-wh-full">
  <div class="g-col-full">

    <header class="header">
      <div class="dot bg-red-500"></div>
      <div class="text-white">疫情检测系统</div>
    </header>
        

    <main> <JsonClient ref="jsonCilentRef" class="flex-auto"/> </main>
    <div class="flex-auto"></div>

    <footer class="footer">

      <div>
        <h1>数据</h1>
        <button   @click='HandleConnect' class="g-btn" >
          连接
        </button>
        <button   @click='HandleDisconnect' class="g-btn" >
          断开
        </button>
        <label for="json-config-modal" class="g-btn "> 设置</label>
      </div>

      <div>
        <h1>监控</h1>
        <button   @click='HandlePlay' class="g-btn" >
          连接
        </button>
        <button   @click='HandlePause' class="g-btn" >
          断开
        </button>
        <label for="video-config-modal" class="g-btn "> 设置</label>
      </div>


    </footer>
    



  </div>
</div> </template>

<script setup>
  import JsonClient from './JsonClient.vue';
  import { ref } from 'vue'
  import { streamplaystate } from '../store/store.js';

  const jsonCilentRef = ref(false);

  const HandleConnect = () => {
    jsonCilentRef.value.StartFetch()
  }
  const HandleDisconnect = () => {
    jsonCilentRef.value.StopFetch()
  }
  const HandlePlay = () => {
    streamplaystate.playing = true ;
  }
  const HandlePause = () => {
    streamplaystate.playing = false ;
  }



</script>

<!-- Footer -->
<style scoped lang="postcss" >

  .footer {
    @apply flex flex-row    border-t-8 border-gray-800
  }
  .footer > div {
    @apply basis-1/2 flex flex-col mx-1 py-1 
            
  }
  h1 {
    @apply text-center 
  }

  .footer > * > .g-btn {
    @apply  block  font-semibold my-1
  }

  .footer > * > :nth-child(2){
    @apply rounded-b-none 
          bg-green-500 text-black text-opacity-70

  }

  .footer > * > :nth-child(3){
    @apply rounded-none 
          bg-red-500 text-black text-opacity-70
  }
  .footer > * > :nth-child(4){
    @apply rounded-t-none
  }

  /* .footer > * > .g-btn :first-child {
    @apply  rounded-t-md mb-1
  }
  .footer > * > :nth-child(2) {
    @apply  rounded-none my-0
  }
  .footer > * > :last-child {
    @apply  rounded-b-md mt-1
  } */
</style>

<!-- Header -->
<style scoped lang="postcss" >
.header{
  @apply  rounded-t-sm bg-gray-800 py-3
         flex flex-row items-center justify-center
}
.dot{
  @apply  w-2 h-2 rounded m-1 
          
}
</style>