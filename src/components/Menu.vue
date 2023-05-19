


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
      <label for="json-config-modal" class="block g-box w-fit"> Config</label>
    </div>

  </div>

</div> </template>

<script setup>
  import JsonClient from './JsonClient.vue';
  import { ref } from 'vue'





  const jsonCilentRef = ref(false);


  const ConBtnHandle = () => {
    jsonCilentRef.value.StartFetch()
  }
  const DisconBtnHandle = () => {
    jsonCilentRef.value.StopFetch()
  }


</script>


<style scoped lang="postcss" >

.header{
  @apply  rounded-t-sm bg-gray-800 py-3
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