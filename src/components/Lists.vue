<template>
  <v-flex class="d-flex justify-space-around">
    <v-sheet
      v-for="lista in listas" :key="lista.id"
      class="list d-flex color-blue my-5 align-center flex-column rounded"
      elevation="6"
    >
      <v-sheet class="list-title my-5 align-center rounded-pill" rounded>
        <h3 class="text-center mt-2">
          {{ lista.nome }}
        </h3>
      </v-sheet>

      <todo-list :todos="lista.todos" :listaId="lista.id" @newTodo="addTodo" />
    </v-sheet>
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
  width: 390px;
  height: 449px;

  &.color-blue {
    background-color: #7fc1fd;
  }

  .list-title {
    width: 346px;
    height: 45px;
  }
}
</style>