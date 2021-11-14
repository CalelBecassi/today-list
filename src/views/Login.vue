<template>
  <div class="vh-100 vw-100 row-login">
    <v-container
      class="mt-14"
    >
      <v-sheet
        class="d-flex mx-auto mt-16"
        color="white"
        elevation="16"
        outlined
        rounded
        shaped
        height="600"
        width="800"
      >
        <v-col sm="4" class="d-flex left-login">
          <v-img
            alt="ToDay Login"
            class="shrink ml-6"
            contain
            src="../assets/logo-login.png"
            transition="scale-transition"
            width="180"
          ></v-img>
        </v-col>

        <v-col sm="6" class>
          <div>
            <login-form @doLogin="login" />
          </div>
        </v-col>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  methods: {
    ...mapGetters([
      'getCurrentUser',
    ]),
    ...mapActions([
      'doLogin',
    ]),
    login(payload) {
      this.doLogin(payload);
      const current_user = this.getCurrentUser();
      
      if( current_user ){
        this.$router.push({ name: 'Home' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.left-login {
  background-color: #f2aa6b;
}

.row-login {
  margin: 0;
}
</style>
