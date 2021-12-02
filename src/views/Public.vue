<template>
  <v-container>
    <AppBar />
    <PublicList :listas="getPublicLists()"/>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppBar from '../components/AppBar.vue';
import PublicList from '../components/PublicList.vue';

export default {
  name: 'Public',
  components: {
    AppBar,
    PublicList,
  },
  created() {
    this.fetchPublicLists();
  },
  methods: {
    ...mapGetters([
      'getPublicLists'
    ]),
    ...mapActions([
      'fetchPublicLists'
    ])
  }
}
</script>