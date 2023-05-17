import { reactive } from 'vue'


export const jsoncilentstate = reactive({
  host:"http://localhost" ,
  path:"/api",
  port:"8003",
  period:250
})

export const streamstate = reactive({
    host:"http://localhost" ,
    path:"live/STREAM_NAME.flv",
    port:"8080"
})
