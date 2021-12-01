<template>
    <v-app-bar
      app
      color="#F2AA6B"
      dark
    >
      <div class="d-flex align-center left-buttons" id="logo">
        <v-img
          alt="ToDay Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo-bar.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="right-buttons">
        <router-link class='links' to="/public"><v-icon color="black" x-large>mdi-earth</v-icon></router-link>
        <router-link class='links' to='/'><v-icon color="black" x-large>mdi-home</v-icon></router-link>
        <router-link class='links' to='/config'><v-icon color="black" x-large>mdi-account-box</v-icon></router-link>
      </div>
      
    </v-app-bar>
</template>

<style scoped>
.links{
  text-decoration: none; 
  color: inherit;
}
.right-buttons{
  margin-right: 10%;
}

.left-buttons{
  margin-left: 10%;
}
</style>