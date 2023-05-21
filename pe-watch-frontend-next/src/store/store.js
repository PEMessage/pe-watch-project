
// 
// Public Part
//  
import { reactive } from 'vue'

export function SetProfile(source,target) {
  for( let key in source){

    target[key] = source[key]
  }
}

export function SetUnEnumerable(obj) {
  for(let key in obj){
    if (typeof obj[key] == 'function'){
      Object.defineProperty(obj, key, {
        enumerable: false 
      })
    }
  }
}




//////////////////////////////////////////////////////////
// 
// Json-Client Config Part
// 
const jsonDefaultProfile = {
  host:"http://localhost" ,
  path:"/api",
  port:"8003",
  period:250
}

const jsonHostProfile = {
  host: 'http://' + window.location.hostname ,
  path:"/api",
  port:"80",
  period:250
}
//      
// Json-Client Init Part
// 
export const jsoncilentstate = reactive({
  host:"" ,
  path:"",
  port:"",
  period:0,
  
  SetToDefault(state = this){
    SetProfile(jsonHostProfile,state)
  },
  SetToHost(state = this){
    SetProfile(jsonHostProfile,state)
  }
})

SetUnEnumerable(jsoncilentstate)
jsoncilentstate.SetToDefault()



//////////////////////////////////////////////////////////


const streamDefaultProfile = {
  host:"http://localhost" ,
  port: 8002,
  path:"/live/STREAM_NAME.flv",
  delay:0.5
}
const streamHostProfile = {
  host: 'http://' + window.location.hostname ,
  port: 80,
  path:"/live/STREAM_NAME.flv",
  delay:0.5
}

export const streamstate = reactive({
    host:"" ,
    path:"",
    port: 0,
    delay: 0 ,
    SetToDefault(state = this){
      SetProfile(streamHostProfile,state)
    },
    SetToHost(state = this){
      SetProfile(streamHostProfile,state)
    }
})

SetUnEnumerable(streamstate)
streamstate.SetToDefault()


//////////////////////////////////////////////////////////


export const streamplaystate = reactive({
  playing: false
})