<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo="todo" />
    </div>
    <v-form @submit.prevent="doAdd">
      <v-text-field
        class="form-style" 
        solo 
        outlined 
        v-model="todo_form" 
        placeholder="Adicionar Novo Todo" />
    </v-form>
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
    width: 100%;
    height: 48px;
    background-color: #ffffff;
  }

   @media screen and (max-width: 1366px ) {
    .form-style {
      margin: 0 auto;
      width: 90%;
      font-size: 0.875rem;
    }
  }

</style>