<template>
  <v-container
  >
    <AppBar />
    <AddList class="add-list mt-3" @addLista="addList"/>
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
  margin: 0 auto;
  width: 50%;
}
</style>