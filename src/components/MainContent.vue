<template> <div class="g-wh-full">
    
    <div class="g-col-full">
        <div class="video"> <PEVideoFLV ref="flvref"/>   </div>

        <div class="btn">
            <button class=" " @click="HandleCon"> ToggleCon</button>
            <button class="g-box inline-block" @click="HandlePlay"> Play</button>
        </div>
    </div>
   
</div> </template>

<script setup>
import PEVideoFLV from './PEVideo/PEVideoFLV.vue';
import  {ref} from 'vue'

const flvref = ref()

const HandleCon = () => {
    flvref.value.ToggleControl()

}
const HandlePlay = () => {
    flvref.value.TogglePlay()
}

</script>



<style  lang="postcss" scoped>



.video{
    @apply   flex-auto 
}

</style>