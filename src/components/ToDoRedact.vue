<template>
  <v-container justify="center">
    <v-card>
      <v-form
        ref="form"
        lazy-validation
        v-model="valid"
        >
        <v-text-field
          v-model="todos.name"
          label="Название"
        ></v-text-field>

        <v-text-field
          v-model="todos.descriptions"
          label="Описание"
          required
        ></v-text-field>

        <v-select
          v-model="todos.status"
          :items="statuses"
          :rules="[v => !!v || 'Item is required']"
          label="Статус"
          required
        ></v-select>
        <v-row justify="center">
          <v-img
            justify="center"
            :src="url"
            max-height="150"
            max-width="250"
          />
        </v-row>
      </v-form>
    </v-card>
  </v-container>   
</template>
<script>
export default {
  data: () => ({
    todos: {},
    image: '',
    valid: false,
    statuses: [
      'К выполнению',
      'В работе',
      'Готово'
    ]
  }),
  mounted() {
    this.todos = this.$store.state.currDo
    this.image = this.$store.state.currDo.img
  },
  computed: {
    url() {
      if (!this.image) return;
        return URL.createObjectURL(this.image);
      }
  },
}
</script>