<template>
  <div class="vh-100 vw-100 row-login">
    <v-container>
      <v-row>
        <v-col
          sm="4"
          class="d-flex justify-content-center align-items-center left-login"
        >
        </v-col>
    
        <v-col
          sm="6"
          class="justify-content-center align-items-center"
        >
          <v-form>   
          <div class="col-8">
            <div><h2>Login</h2></div>
            <v-text-field
              v-model="email"
              label="E-mail"
              solo
              prepend-inner-icon
            ></v-text-field>
                
            <v-text-field
              v-model="senha"
              label="Senha"
              solo
              prepend-inner-icon
              
            ></v-text-field>
          </div>
          </v-form> 
        
          <v-btn
            elevation="2"
            color="#f2aa6b"
            dark
            large
          >Entrar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return{};
    },
  }
</script>

<style lang="scss" scoped>
  .left-login{
    background-color: #f2aa6b;
  }

  .row-login{
    margin: 0;
  }
</style>
