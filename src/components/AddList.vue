<template>
  <v-row>
    <v-form
      class="d-flex"
      @submit.prevent="newList(list_name)"
    >
      <v-col
        cols="10"
      >
        <v-text-field
          v-model="list_name"
          placeholder="Digite o nome da nova lista"
          solo
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col
        cols="2"
      >
        <v-btn type="submit" rounded color="green" dark x-large> Adicionar </v-btn>
      </v-col>
    </v-form>
  </v-row>
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
      if (!(list === '')) {
        this.list_name = '';
        this.$emit('addLista', { nome: list });
      }
      else {
        window.alert("Mensagem vazia! ")
      }
    }
  }
};
</script>

