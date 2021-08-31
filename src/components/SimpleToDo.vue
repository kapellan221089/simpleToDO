<template>
  <v-container>
    <v-simple-table>
    <template v-slot:default>
      <thead >
        <tr>
          <th class="text-left">
            Название
          </th>
          <th class="text-left">
            Описание
          </th>
          <th class="text-left">
            Статус
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in todo"
          :key="item.name"
        > 
          <td class="text-left">{{item.name}}</td>
          <td class="text-left">{{ item.descriptions }}</td>
          <td class="text-left">{{ item.status }}
            <v-btn
              class="mx-2 float-right"
              fab
              dark
              small
              color="cyan"
              @click="dialog = !dialog"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-dialog
              v-model="dialog"
              max-width="500px"
              >
                <v-card
                  v-show="dialog"
                >
                  <v-form
                  >
                  <v-text-field
                    v-model="changeDO.name"
                    label="Название"
                    required
                  ></v-text-field>

                  <v-text-field
                  v-model="changeDO.descriptions"
                    label="Описание"
                    required
                  ></v-text-field>

                  <v-select
                  v-model="changeDO.status"
                    :items="statuses"
                    :rules="[v => !!v || 'Item is required']"
                    label="Статус"
                    required
                  ></v-select>
                  <v-btn
                    color="success"
                    class="mr-4"
                    @click="sayHi1(item)"
                  >
                    Создать
                  </v-btn>

                  <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                  >
                    Сбросить
                  </v-btn>
                  </v-form>
                </v-card>
            </v-dialog>
          </td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
    <v-row >
    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="success"
        @click="sayHi"
      >
        Создать задачу
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>
      <v-expand-transition>
        <v-card
          v-show="expand"
          height="300"
          width="300"
        >
          <v-form
          ref="form"
          >
          <v-text-field
            v-model="todos.name"
            label="Название"
            required
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
          <v-btn
            color="success"
            class="mr-4"
            @click="create"
          >
            Создать
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Сбросить
          </v-btn>
          </v-form>
        </v-card>
      </v-expand-transition>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'simpleToDo',

    data: () => ({
        todo: [
        ],
        todos: {
          name: '',
          descriptions: '',
          status: ''
        },
        statuses: [
          'К выполнению',
          'В работе',
          'Готово',
          'Что нам делать памагити))',
        ],
        expand: false,
        expand2: false,
        dialog: false,
        changeDO: {
          name: '',
          descriptions: '',
          status: ''
        }
    }),
    methods: {
      sayHi () {
        this.expand = !this.expand
      },
      sayHi1 (value) {
        value.name = this.changeDO.name
        value.descriptions = this.changeDO.descriptions
        value.status = this.changeDO.status
        this.changeDO.name = ''
        this.changeDO.descriptions = ''
        this.changeDO.status = ''
        this.dialog = !this.dialog
      },
      create () {
        this.todo.push({name: this.todos.name, descriptions: this.todos.descriptions, status: this.todos.status,})
        this.expand = !this.expand
        this.reset()
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  }
</script>
