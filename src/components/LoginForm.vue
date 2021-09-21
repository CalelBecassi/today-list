<template>
    <v-form 
    class="form-style mt-14" 
    @submit.prevent="doLogin(email, senha)"
    >
      <div class="text-center mb-3"><h2>Login</h2></div>

      <v-text-field
        v-model="email"
        label="E-mail"
        solo
        prepend-inner-icon="mdi-email"
      ></v-text-field>

      <v-text-field
        v-model="senha"
        :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
        :type="password ? 'text' : 'password'"
        @click:append="password = !password"
        label="Senha"
        solo
        prepend-inner-icon="mdi-lock"
      ></v-text-field>

      <v-btn 
        class="btn-login"
        elevation="2" 
        color="#f2aa6b" 
        dark
        type="submit"
      >Entrar</v-btn>
    </v-form>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
      password: false,
      email: '',
      senha: '',
    }
  },
  methods: {
    doLogin(email, senha) {
      this.email = '';
      this.senha = '';

      this.$emit('doLogin', {
        email: email,
        senha: senha,
      });
    }
  }
}
</script>

<style scoped>
  .form-style {
    padding-top: 23%;
    margin-left: 30%;
  }
  .btn-login {
    width: 100%;
  }
</style>