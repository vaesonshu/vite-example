<script setup>
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/logo.png'

// import test from './test?url' // 返回引用地址的路径
// import test2 from './test?raw' // 以字符串的形式把文件中的代码返回回来
// console.log(test)
// console.log(test2)
</script>

<template>
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
