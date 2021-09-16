<template>
    <v-app-bar
      app
      color="#F2AA6B"
      dark
    >
      <div class="d-flex align-center left-buttons" id="logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo-bar.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="right-buttons">
        <v-icon color="black" x-large>mdi-home</v-icon>
        <v-icon color="black" x-large>mdi-account-box</v-icon>
      </div>
      
    </v-app-bar>
</template>

<style scoped>
.right-buttons{
  margin-right: 10%;
}

.left-buttons{
  margin-left: 10%;
}
</style>