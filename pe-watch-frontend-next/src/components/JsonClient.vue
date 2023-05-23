
<template> <div>


<main class="main">
  <div class="title">当前状态</div>
  <div v-for="(value,key) in current_state_map" class="content">
    <div class="key">{{ value }}: </div> 
    <div class="value">{{ data[key] }} </div>
  </div> 
</main>

<main class="main">
    <div class="title">累计状态(30S)</div>
    <div v-for="(value,key) in sum_state_map" class="content">
      <div class="key">{{ value }}: </div> 
      <div class="value">{{ data[key] }} </div>
    </div> 
    <div class="content">
      <div class="key">佩戴率:</div>
      <div class="value">{{ mask_rate.toFixed(2) }} </div>
    </div>
    <!-- <div class="content">
      <div class="key">安全率:</div>
      <div class="value">{{ safe_rate.toFixed(2) }} </div>
    </div> -->
  </main>

  <main class="main max-h-36 border-y-2 py-2 border-gray-500">

    <div  class='risk' :class="{highrisk:isHighRisk}">
      {{ isHighRisk ? "危险" : "安全" }}
    </div>
  </main>
    
<!-- <div class="content">
  {{ loading ? "已连接" : "未连接" }}
</div> -->

</div> </template>

<script setup>
import { ref , reactive, computed, watchEffect} from 'vue'
import {jsoncilentstate} from '../store/store.js'

const current_state_map = reactive({"detection_mask": "有口罩",
                                    "detection_no_mask":"无口罩",
                                    "cur_person_sum":"人数" } )
const sum_state_map = reactive({"mask_sum":"有口罩",
                                "no_mask_sum":"无口罩",
                                "person_sum":"人数"})

const data = reactive({"detection_mask": 0,
                       "detection_no_mask":0,
                       "cur_person_sum":0,
                       "mask_sum":0,
                       "no_mask_sum":0,
                       "person_sum":0
})
const mask_rate = computed(() => {
  return data.mask_sum/data.person_sum
})

const safe_rate = computed(() => {
  if( isNaN(mask_rate.value) ){return NaN}
  if ( mask_rate.value == 1 ){return 1}
  if(data.person_sum < 35) {
    return mask_rate.value * 0.85 - (data.person_sum/100) * 0.15
  } else {
    return mask_rate.value * 0.7 - (data.person_sum/100) * 0.3
  }
})

const isHighRisk = computed(() => {
  if(isNaN(mask_rate.value)) {return false}
  if(mask_rate.value >= 0.55) {
    return false
  } else {
    return true
  }
})



const loading = ref(false)
let host = "http://localhost"
let path = '/api'
let port = 8003
let period = 250



let fetchID = 0

const ResetData = () => {
  for(let key of Object.keys(data)){
    data[key] = 0
  }
}

const FetchHander = async () => {
    let response ;
    try{
       response = await fetch(jsoncilentstate.host+':'+jsoncilentstate.port+jsoncilentstate.path)
    } catch(error) {
      loading.value = false
    }
    
    let resjson;
    try{
      resjson = await response.json()
    } catch(err) {
      loading.value = false
    }
    
    for(let item of Object.keys(data)){
      console.log(typeof resjson[item])
      if( (resjson[item] !== null && resjson[item] !== undefined) ){
        data[item] = resjson[item]
      }
    }
    loading.value = true
  }
  
  const StopFetch = async () => {
    if(fetchID){
       clearInterval(fetchID)
       fetchID = 0
    }
    setTimeout(ResetData,30)
  }
  
  const StartFetch = () => {
    StopFetch()
    fetchID = setInterval(FetchHander,jsoncilentstate.period)
  }

  const log = () => {
    console.log("hi")
  }

defineExpose({StartFetch, StopFetch, log})

</script>

<style lang="postcss" scoped>
.risk{
  @apply  
         rounded-md bg-green-500 mx-2
         text-center py-1 text-black text-opacity-70 font-bold
         transition-all duration-300
}
.risk.highrisk {
  @apply bg-red-500
}


</style>

<style lang="postcss" scoped>
* {
  @apply text-white
}

.content{
  @apply  
         px-3 py-1 rounded-md bg-gray-800 m-2
         flex flex-row items-center justify-between
         transition-colors duration-75
}

.value {
  @apply bg-slate-600 px-1 rounded-md text-sea-200
}

.content:hover{
  @apply bg-gray-700
}

.main{
  @apply flex flex-col 
}

.title{
  @apply mt-1 text-center
}




</style>