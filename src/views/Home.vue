<template>
  <v-app>
    <AppBar />

    <v-content>
      <AddTodo class="add-todo"/>
    </v-content>
  </v-app>

</template>

<script>
  import AppBar from '../components/AppBar.vue'
  import AddTodo from '../components/AddTodo.vue'


  export default {
    name: 'Home',

    components: {
      AppBar,
      AddTodo,
    },
  }
</script>

<style scoped>
.add-todo{
  margin-top: 10%;
  margin-left: 10%;
  width: 50%;
}
</style>