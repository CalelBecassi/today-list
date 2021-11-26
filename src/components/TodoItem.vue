<template>
  <v-sheet class="todo-style mb-3 rounded">
    <div class="d-flex align-center ml-3">
      <div class="mt-n4">
        <h3 
          class="text-center pt-2 font-weight-regular" 
          :class="todo.feito && 'font-italic text-decoration-line-through'"
        > {{ todo.descricao }} </h3>
      </div>
      <v-spacer />
      <div class="mt-n2">
        <v-checkbox v-model="todo.feito"/>
      </div>
      <v-icon 
        class="mt-n2"
        @click="deleteTodo"  
      >
        mdi-delete
      </v-icon>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', {id: this.todo._id});
    },
  }
};
</script>

<style scoped>
  .todo-style {
    width: 100%;
    height: 45px;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1920px ) {
    .todo-style {
      margin: 0 auto;
      width: 98%;
      font-size: 0.875rem;
    }
  }
</style>