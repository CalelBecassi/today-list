<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo="todo" />
    </div>
    <v-sheet class="form-style" rounded>
      <v-form @submit.prevent="doAdd">
        <v-text-field outlined v-model="todo_form" label="Adicionar Novo Todo" />
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
    listaId: {
      type: Number,
    },
  },
  data() {
    return {
      todo_form: '',
    };
  },
  methods: {
    doAdd() {
      this.$emit('newTodo', {
        descricao: this.todo_form,
        lista: this.listaId,
      });
      this.todo_form = '';
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.form-style {
  width: 300px;
  height: 56px;
  background-color: #ffffff;
}
</style>