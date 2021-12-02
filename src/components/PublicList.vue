<template>
  <v-flex>
    <v-row class="d-flex flex-row">
      <v-col
        v-for="lista in listas" :key="lista.id"
        cols="3"
      >
        <v-sheet
          :color="lista.color"
          class="list d-flex my-5 align-center flex-column rounded"
          elevation="6"
        >
          <v-sheet class="list-title my-5 rounded-pill justify-space-between" rounded>
            <v-row
              class="align-center"
            >
              <v-col
                cols="12"
              >
                <h3 class="text-center mt-2">
                  {{ lista.nome }}
                </h3>
              </v-col>
            </v-row>
          </v-sheet>

          <v-sheet 
            v-for="todo in lista.todos" :key="todo._id"
            class="todo-style mb-3 rounded"
          >
            <div class="d-flex align-center justify-center ml-3">
              <div class="text-center">
                <h3 
                  class="mt-2 font-weight-regular" 
                  :class="todo.feito && 'font-italic text-decoration-line-through'"
                > {{ todo.descricao }} </h3>
              </div>
            </div>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  name: 'PublicList',
  props: {
    listas: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    width: 20vw;
    height: 47vh;

    .list-title {
      width: 90%;
      height: 45px;
    }
  }
  .todo-style {
    width: 100%;
    height: 45px;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1920px ) {
    .todo-style {
      margin: 0 auto;
      width: 98%;
      font-size: 0.875rem;
    }
    .list {
    width: 18vw;
    }
  }
</style>