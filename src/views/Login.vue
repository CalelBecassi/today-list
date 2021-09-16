<template>
    <div class="row-login">
        <v-container>
        <v-row>
            <v-col
            cols=5
            sm=3
            class="justify-content-center align-items-center left-login"
            >
            </v-col>
    
            <v-col
            cols="7"
            sm="6"
            class="justify-content-center align-items-center"
            >
            <v-form>   
            <v-text-field
                v-model="first"
                label="E-mail"
                solo
            ></v-text-field>
                
            <v-text-field
                v-model="last"
                label="Senha"
                solo
            ></v-text-field>
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
    margin: 15% 30% 15%;
}
</style>

