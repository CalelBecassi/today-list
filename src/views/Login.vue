<template>
  <v-card
    class="d-flex pa-2"
    outlined
    tile
  >
    <div>
        <v-form>
            <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="first"
                    label="E-mail"
                    solo
                ></v-text-field>
                </v-col>
            
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="last"
                    label="Senha"
                    solo
                ></v-text-field>
                </v-col>
                <v-btn
                    block
                    elevation="2"
                    color="#f2aa6b"
                    dark
                    x-large
                >Entrar</v-btn>
            </v-row>
            </v-container>
        </v-form>
    </div>
  </v-card>
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

</style>

