<template>
    <v-container>
        <v-sheet
            class="mx-auto"
            color="white"
            elevation="16"
            height="400"
            outlined
            rounded
            shaped
            width="400"   
        >
            <div class="d-flex align-center flex-column ">
                <h1 class="my-12">Meu Perfil</h1>

                <v-btn 
                    class="mb-5 style-btn py-6"
                    color="#F2AA6B"
                    rounded
                >Configurações</v-btn>
                <v-btn
                    class="mb-5 style-btn py-6"
                    color="#F2AA6B"    
                    rounded
                >Apagar Dados</v-btn>
                <v-btn
                    class="mb-5 style-btn py-6"
                    color="#F2AA6B" 
                    rounded
                >Trocar de Conta</v-btn>
            </div>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: 'Config',
}
</script>

<style lang="scss" scoped>
    .style-btn{
        width:300px;
    }
</style>