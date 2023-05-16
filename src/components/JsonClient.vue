
<template> <div>
  <div>
     {{ loading}}
  </div>
  <div v-for="(value,key) in data ">
     {{ key }}:{{ value  }}
  </div>
</div> </template>

<script setup>
import { ref, onMounted } from 'vue'


const data = ref(null)
const loading = ref(false)
let path = '/api'
let port = 8003
let fetchID = 0

const FetchHander = async () => {
    loading.value = false
    const response = await fetch('http://localhost:8003'+path)
    data.value = await response.json()
    loading.value = true
  }
const StartFetch = () => {
  if(fetchID){
    clearInterval(fetchID)
  }
  fetchID = setInterval(FetchHander,200)
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

</style>