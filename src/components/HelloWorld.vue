<script setup>
// import '@styles/index.css'
import '@styles/test.less'
import classes from '@styles/test.module.css'
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 class="root">{{ msg }}</h1>

  <p :class="classes.moduleClass">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
