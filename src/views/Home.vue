<template>
  <v-container
  >
    <AppBar />
    <AddList class="add-list mt-3" @addLista="addList"/>
    <v-text-field class="add-list" v-model="busca"
      solo
      placeholder="Buscar listas por título"
      outlined
      rounded
    />
    <Lists :listas="filteredListas"/>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AppBar from '../components/AppBar.vue'
  import AddList from '../components/AddList.vue'
  import Lists from '../components/Lists.vue'

  export default {
    name: 'Home',

    data() {
      return{
        busca:'',
      };
    },

    components: {
      AppBar,
      AddList,
      Lists,
    },
    created() {
      this.fetchListas();
    },
    computed: {
      ...mapGetters([
        'getListas',
      ]),
      filteredListas: function(){
        return this.getListas.filter((list) => {
          return list.nome.match(this.busca);
        });
      }
    },
    methods: {
      ...mapActions([
        'addList',
        'fetchListas',
        'saveListas'
      ])
    },
  }
</script>

<style scoped>
.add-list{
  margin: 0 auto;
  width: 50%;
}
</style>