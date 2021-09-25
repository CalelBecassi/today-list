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
          <v-sheet class="list-title my-5 align-center rounded-pill" rounded>
            <h3 class="text-center mt-2">
              {{ lista.nome }}
            </h3>
          </v-sheet>

          <todo-list :todos="lista.todos" :listaId="lista.id" @newTodo="addTodo" />
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
    ...mapActions(['addTodo']),
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
</style>