


<template>
  <div class="flex-auto fter">
      <div class="flex flex-col">
      <kbd class=" relative group" >
        <div class="reddot"></div>
        疫情检测系统
      </kbd>

        <JsonClient ref="pereqCP"/>
        
    </div>
    
  </div>


  <div class="grid">
    <button   @click='ConBtnHandle' class="btn" >
        Connect
    </button>
    <button   @click='DisconBtnHandle' class="btn" >
        Disconnect
    </button>
  </div>

</template>

<script setup>
  import JsonClient from './JsonClient.vue';
  import { ref } from 'vue'

  const link = ref(false);


  const pereqCP = ref()
  const ConBtnHandle = () => {
    pereqCP.value.StartFetch()
  }
  const DisconBtnHandle = () => {
    pereqCP.value.StopFetch()
  }


</script>


<style scoped lang="postcss" >

*{
  @apply text-sea-200
}
.reddot{
  @apply inline-block w-2 h-2 rounded m-1 bg-red-500
}
.box
{
  @apply border-solid border-2 border-gray-700 rounded-md p-1 m-1 ;
}
.btn
{
 @apply text-sea-200 w-auto box 
}
</style>