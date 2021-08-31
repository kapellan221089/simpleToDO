<template>
  <v-app>
    <v-main>
      <SimpleToDo/>
    </v-main>
  </v-app>
</template>

<script>
import SimpleToDo from './components/SimpleToDo';

export default {
  name: 'App',

  components: {
    SimpleToDo,
  },

  data: () => ({
    //
  }),
};
</script>
