


<template> <div class="g-wh-full">
  <div class="g-col-full">

    <div class="header">
      <div class="reddot"></div>
      <div class="text-white">疫情检测系统</div>
    </div>
        
    <JsonClient ref="jsonCilentRef" class="flex-auto"/>

    <div>
      <button   @click='ConBtnHandle' class="g-box" >
          Connect
      </button>
      <button   @click='DisconBtnHandle' class="g-box" >
          Disconnect
      </button>
    </div>

  </div>

</div> </template>

<script setup>
  import JsonClient from './JsonClient.vue';
  import { ref } from 'vue'



  const jsonCilentRef = ref(false);


  const pereqCP = ref()
  const ConBtnHandle = () => {
    jsonCilentRef.value.StartFetch()
  }
  const DisconBtnHandle = () => {
    jsonCilentRef.value.StopFetch()
  }


</script>


<style scoped lang="postcss" >

.header{
  @apply mt-1 mb-3 
         p-1 rounded-md bg-gray-800
         flex flex-row items-center justify-center
}
.reddot{
  @apply  w-2 h-2 rounded m-1 bg-red-500
          
}

.btn
{
 @apply text-sea-200 w-auto 
 border-solid border-2 border-gray-700 rounded-md p-1 m-1 
}
</style>