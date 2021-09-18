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
};
</script>

<style scoped>
  .todo-style {
    width: 300px;
    height: 45px;
    background-color: #ffffff;
  }
</style>