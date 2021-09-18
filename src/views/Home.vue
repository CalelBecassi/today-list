<template>
  <v-container>
    <AppBar />
    <v-content>
      <AddTodo class="add-todo"/>
      <Lists :listas="getListas"></Lists>
    </v-content>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  import AppBar from '../components/AppBar.vue'
  import AddTodo from '../components/AddTodo.vue'
  import Lists from '../components/Lists.vue'

  export default {
    name: 'Home',

    components: {
      AppBar,
      AddTodo,
      Lists,
    },
    computed: {
      ...mapGetters([
        'getListas',
      ]),
    },
  }
</script>

<style scoped>
.add-todo{
  margin-top: 10%;
  margin-left: 20%;
  width: 50%;
}
</style>