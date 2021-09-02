<template>
  <v-container>
    <v-data-iterator
      :items="statuses"
      hide-default-footer
    >
      <template v-slot:default="">
        <v-row>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                К выполнению
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="start in startArr"
                  v-model="start.name"
                  :key="start.name"
                  class="item"
                >
                  <v-list-item-content class="align-end" @click="sayHi1(start)">
                    {{start.name}}
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
            <v-col>
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  В работе
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item
                    v-for="work in workArr"
                    v-model="work.name"
                    :key="work.name"
                    class="item"
                  >
                    <v-list-item-content class="align-end" @click="sayHi1(work)">
                      {{work.name}}
                    </v-list-item-content>
                  </v-list-item>

                </v-list>
              </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                Готово
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="done in doneArr"
                  :key="done.name"
                  class="item"
                >
                  <v-list-item-content class="align-end" @click="sayHi1(done)">
                    {{done.name}}
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-row justify="center">
    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="success"
        @click="sayHi"
      >
        Создать задачу
      </v-btn>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'simpleToDo',
    data: () => ({
      statuses: [
        'К выполнению',
        'В работе',
        'Готово'
      ],
      doneArr:[],
      workArr:[],
      startArr:[]
    }),
    mounted() {
      for (let i=0; i<this.$store.state.todos.length; i++) {
        do{
          if(this.$store.state.todos[i].status === 'Готово') {
            this.doneArr.push(this.$store.state.todos[i])
            break;
          }
          if(this.$store.state.todos[i].status === 'В работе' ) {
            this.workArr.push(this.$store.state.todos[i])
            break;
          }
          if(this.$store.state.todos[i].status === 'К выполнению' ) {
            this.startArr.push(this.$store.state.todos[i])
            break;
          }
          // eslint-disable-next-line no-constant-condition
        }while (true)
      }
    },
    methods: {
      sayHi () {
        this.$router.push('create')
        //this.expand = !this.expand
      },
      sayHi1 (value) {
        console.log(value)
        this.$store.commit('setCurrDo', value)
        this.$router.push('about')
      }
    }
  }
</script>
<style scoped>
  .item :hover{
    cursor: pointer;
    border-radius: 3px;
    background-color: #4caf50;
  }

</style>
