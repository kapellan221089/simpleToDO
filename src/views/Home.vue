<template>
  <div class="home">
    <h1> Лист задач</h1>
    <SimpleToDo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleToDo from '@/components/SimpleToDo.vue'

export default {
  name: 'Home',
  components: {
    SimpleToDo
  }
}
</script>
