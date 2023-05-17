
<template> <div>


  <main class="main">
    <div class="cont">
     {{ loading ? "已连接" : "未连接" }}
    </div>
    <div v-for="(value,key) in data" class="cont">
     {{ key }}:{{ value  }}  
    </div> 
    <div class="cont">
      mask_rate: {{ (data.mask_sum / data.person_sum) }} 
    </div>
  </main>


</div> </template>

<script setup>
import { ref , reactive} from 'vue'


const data = reactive({"detection_mask": 0,
                       "detection_no_mask":0,
                       "cur_person_sum":0,
                       "mask_sum":0,
                       "no_mask_sum":0,
                       "person_sum":0
})
const loading = ref(false)
let path = '/api'
let port = 8003
let fetchID = 0


const FetchHander = async () => {
    let response ;
    try{
       response = await fetch('http://localhost:8003'+path)
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
const StartFetch = () => {
  if(fetchID){
    clearInterval(fetchID)
  }
  fetchID = setInterval(FetchHander,350)
}

const StopFetch = () => {
  clearInterval(fetchID)
}

const log = () => {
  console.log("hi")
}

defineExpose({StartFetch, StopFetch, log})

</script>

<style scoped>

.cont{
  @apply 
         p-1 rounded-md bg-gray-800 m-3
         flex flex-row items-center justify-center
}
.cont:hover{
  @apply bg-gray-700
}

.main{
  @apply  border-b-8 border-gray-800
}



</style>