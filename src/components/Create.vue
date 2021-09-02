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
            :rules="nameRules"
            label="Название"
        ></v-text-field>

        <v-text-field
          v-model="todos.descriptions"
          :rules="descrRules"
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
        <v-row >
          <v-col cols="1">
              <v-file-input hide-input v-model="image" />
          </v-col>
          <v-col>
            <v-img
              justify="center"
              :src="url"
              max-height="150"
              max-width="250"
            />
          </v-col>
        </v-row>
        <v-btn
          color="success"
          class="mr-4"
          :disabled="!valid"
          @click="create()"
        >
          Создать
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="resets"
        >
          Сбросить
        </v-btn>
      </v-form>
    </v-card>
  </v-container>   
</template>
<script>
export default {
    data: () => ({
        image: null,
        nameRules: [
        v => !!v || 'Name is required',
        ],
        descrRules: [
        v => !!v || 'E-mail is required',
        ],
        todos: {
            name:'',
            descriptions: '',
            status: ''
        },
        valid: true,
        statuses: [
          'К выполнению',
          'В работе',
          'Готово'
        ]
    }),
    mounted() {
        if (this.todos.name === '') {
            this.valid = false
        }
    },
    updated() {
        if (this.todos.name === '' 
        || this.todos.descriptions === '' 
        || this.todos.status === ''
        || this.todos.name === null
        || this.todos.descriptions === null
        || this.todos.status === null) {
            this.valid = false
        }
    },
    computed: {
        url() {
            if (!this.image) return;
            return URL.createObjectURL(this.image);
        }
    },
    methods: {
        create () {
            this.$store.commit('addToDo', {name: this.todos.name, descriptions: this.todos.descriptions, status: this.todos.status, img: this.image})
            this.resets()
            this.$router.push('/')
        },
        resets () {
        this.$refs.form.reset()
      },
    }
}
</script>