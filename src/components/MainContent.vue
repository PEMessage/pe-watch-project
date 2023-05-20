<template> <div class="g-wh-full">
    
    <div class="g-col-full">
        <div class="video"> <PEVideoFLV ref="flvref"/>   </div>

        <!-- <div >
            <button class=" " @click="HandleCon"> Con</button>
            <button class="g-box inline-block" @click="HandlePlay"> Play</button>
        </div> -->
    </div>
   
</div> </template>

<script setup>
import PEVideoFLV from './PEVideo/PEVideoFLV.vue';
import  {ref ,watch} from 'vue'

import { streamplaystate } from '../store/store.js'

const flvref = ref()

const HandleCon = () => {
    flvref.value.ToggleControl()
}
const HandlePause = () => {
    flvref.value.Pause()

}
const HandlePlay = () => {
    flvref.value.Play()
}

watch(streamplaystate, (e) => {
    if(e.playing) {
        HandlePlay()
    } else {
        HandlePause()
    }
})



</script>



<style  lang="postcss" scoped>



.video{
    @apply   flex-auto 
}

</style>