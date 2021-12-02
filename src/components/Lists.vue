<template>
  <v-flex>
    <v-row class="d-flex flex-row">
      <v-col
        v-for="lista in listas" :key="lista.id"
        cols="3"
      >  
        <v-sheet
          :color="lista.color"
          class="list d-flex my-5 align-center flex-column rounded"
          elevation="6"
        >
          <v-sheet class="list-title my-5 rounded-pill justify-space-between" rounded>
            <v-row
              class="align-center"
            >
              <v-col
                cols="2"
              >
                <v-icon 
                  class="ml-2 mt-2"
                  @click="makePublic(lista)"
                >
                  {{ lista.public? 'mdi-earth' : 'mdi-earth-off'}}
                </v-icon>
              </v-col>

              <v-col
                cols="8"
              >
                <h3 class="text-center mt-2">
                  {{ lista.nome }}
                </h3>
              </v-col>
          
              <v-col
                cols="2"
              >
                <v-icon
                  class="mr-4 mt-2"
                  @click="deleteLista({id: lista._id})"  
                >
                 mdi-delete
                </v-icon> 
              </v-col>

            </v-row>
          </v-sheet>
          <todo-list :todos="lista.todos" :listaId="lista._id" @newTodo="addTodo" @doDelete="deleteTodo" @saveList="saveLista(lista)"/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
import TodoList from "./TodoList.vue";

export default {
  props: {
    listas: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(['addTodo', 'deleteTodo', 'deleteLista', 'saveLista']),
    makePublic(payload) {
      payload.public = !payload.public;
      this.saveLista(payload);
    }
  },
  components: {
    TodoList,
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 20vw;
  height: 47vh;

  .list-title {
    width: 90%;
    height: 45px;
  }
}
@media screen and (max-width: 1920px){
  .list {
    width: 18vw;
  }
}
</style>