
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
      <div class="value">{{ (data.mask_sum / data.person_sum).toFixed(2) }} </div>
    </div>
</main>
    
<div class="content">
  {{ loading ? "已连接" : "未连接" }}
</div>

</div> </template>

<script setup>
import { ref , reactive} from 'vue'
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
const loading = ref(false)
let host = "http://localhost"
let path = '/api'
let port = 8003
let fetchID = 0

const ResetData = () => {
  for(let key of Object.keys(data)){
    data[key] = 0
  }
}

const FetchHander = async () => {
    let response ;
    try{
       response = await fetch(host+':'+port+path)
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
  
  const StopFetch = () => {
    if(fetchID){
       clearInterval(fetchID)
    }
    setTimeout(ResetData,30)
  }
  
  const StartFetch = () => {
    StopFetch()
    fetchID = setInterval(FetchHander,period)
  }

  const log = () => {
    console.log("hi")
  }

defineExpose({StartFetch, StopFetch, log})

</script>

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
  @apply  border-b-8 border-gray-800 flex flex-col py-2
}

.title{
  @apply mt-1 text-center
}




</style>