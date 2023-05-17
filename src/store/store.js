import { reactive } from 'vue'


export const state = reactive({

  message: 'Hello World',


  setMessage(msg) {
    this.message = msg
  },
})
