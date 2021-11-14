<template>
  <div class="row-login">
    <v-container>
      <v-sheet
        class="d-flex mx-auto mt-16"
        color="white"
        elevation="16"
        height="600"
        outlined
        rounded
        shaped
        width="800"
      >
        <v-col sm="4" class="d-flex left-login">
          <div class="d-flex mx-auto">
            <v-img
              alt="ToDay Login"
              class="shrink mr-2"
              contain
              src="../assets/logo-login.png"
              transition="scale-transition"
              width="180"
            ></v-img>
          </div>
        </v-col>

        <v-col sm="8" class="mt-10">
          <div class="col-8 mx-auto mt-15">
            <div class="text-center mb-5"><h2>Cadastre-se</h2></div>
            <v-form
              @submit.prevent="doAdd({
                nome,
                email,
                senha,
                confirmacaoSenha,
              })"
            > 
              <v-text-field
                v-model="nome"
                label="Nome"
                prepend-inner-icon="mdi-account"
                dense
                solo-inverted
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="E-mail"
                prepend-inner-icon="mdi-email"
                dense
                solo-inverted
              ></v-text-field>

              <v-text-field
                v-model="senha"
                label="Senha"
                prepend-inner-icon="mdi-lock"
                dense
                solo-inverted
              ></v-text-field>

              <v-text-field
                v-model="confirmacaoSenha"
                label="Confirme a senha"
                prepend-inner-icon="mdi-lock"
                dense
                solo-inverted
              ></v-text-field>
              <v-btn type="submit" elevation="5" color="#f2aa6b" dark block large>Confirmar</v-btn>
            </v-form>
          </div>
        </v-col>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      confirmacaoSenha: '',
    };
  },
  methods: {
    ...mapActions([
      'newUser'
    ]),
    doAdd(payload) {
      this.nome = '';
      this.email = '';
      this.senha = '';
      this.confirmacaoSenha = '';

      this.newUser(payload).then((_, e) => {
        if (e) {
          console.log(e);
        }
        else {
          this.$router.push({ name: 'Login' });
        }
      })
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
