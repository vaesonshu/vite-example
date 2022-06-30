import { createApp } from 'vue'
import App from './App.vue'

// import Worker from './worker?worker'
// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log(e)
// }

// import pkg from '../package.json'
// console.log(pkg)

console.log(import.meta.env)

// const x = import.meta.env.VITE_TITLE

createApp(App).mount('#app')
