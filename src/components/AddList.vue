<template>
  <v-form
    class="d-flex flex-row"
    @submit.prevent="newList(list_name)"  
  >
    <v-text-field
      v-model="list_name"
      label="Adicionar nova lista"
      placeholder="Digite o nome da nova lista"
      outlined
      rounded
      clearable
    ></v-text-field>
    <v-spacer />
    <v-btn rounded color="green" dark x-large> Adicionar </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      list_name: '',
    };
  },
  methods: {
    newList(list) {
      this.list_name = '';
      this.$emit('addLista', { nome: list })
    }
  }
};
</script>

