<template>
  <v-container>
    <AppBar />
    <v-sheet
      class="mx-auto mt-16"
      color="white"
      elevation="16"
      height="400"
      outlined
      rounded
      shaped
      width="400"
    >
      <div class="d-flex align-center flex-column">
        <h1 class="my-12">Meu Perfil</h1>

        <v-btn class="mb-5 style-btn py-6" color="#F2AA6B" rounded disabled
          >Configurações</v-btn
        >
        <v-btn class="mb-5 style-btn py-6" color="#F2AA6B" rounded disabled
          >Apagar Dados</v-btn
        >
        <v-btn 
          class="mb-5 style-btn py-6"
          color="#F2AA6B"
          rounded
          @click="logout"
        >Trocar de Conta
        </v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import store from "../store";

export default {
  name: "Config",
  components: {
    AppBar,
  },
  methods: {
    logout(){
      store.dispatch('doLogout').then(() => {
      this.$router.push({ name: 'Login' });
      });
    },
  }
};
</script>

<style lang="scss" scoped>
    .style-btn{
      width:18.75em;
    }
</style>