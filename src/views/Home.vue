<template>
  <v-container>
    <AppBar />
    <AddList class="add-list" @addLista="addList"/>
    <Lists :listas="getListas"/>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AppBar from '../components/AppBar.vue'
  import AddList from '../components/AddList.vue'
  import Lists from '../components/Lists.vue'

  export default {
    name: 'Home',

    components: {
      AppBar,
      AddList,
      Lists,
    },
    computed: {
      ...mapGetters([
        'getListas',
      ]),
    },
    methods: {
      ...mapActions([
        'addList'
      ])
    }
  }
</script>

<style scoped>
.add-list{
  margin-top: 10%;
  margin-left: 20%;
  width: 50%;
}
</style>