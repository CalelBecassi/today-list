<template>
  <v-sheet class="todo-style mb-3 rounded">
    <div>
      <h3 class="text-center pt-2"> {{ todo.description }} </h3>
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