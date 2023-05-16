<template>

    <div class="warpperx">
        <div class="video">  <PEVideoFLV ref="flvref" />  </div>
        <div class="w-full "></div>
        <div class="w-full h-300 border-sea-400  border-solid border-2">
            <button class="btn" @click="HandleCon"> ToggleCon</button>
            <button class="btn" @click="HandlePlay"> Play</button>
        </div>
        

    </div>

 
</template>

<script setup>
import PEVideoFLV from './PEVideo/PEVideoFLV.vue';
import  {ref} from 'vue'
const flvref = ref()

const HandleCon = () => {
    flvref.value.ToggleControl()

}
const HandlePlay = () => {
    flvref.value.Pause()
}

</script>



<style scoped lang="postcss">

*{
  @apply text-sea-200
}
.warpperx
{
    @apply h-full w-full flex flex-col 
}
.video
{
    @apply  flex-auto
}

.btn
{
 @apply text-sea-200 w-auto 
 border-solid border-2 border-gray-700 rounded-md p-1 m-1 
}


</style>