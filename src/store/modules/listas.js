const state = {
  listas: 
  [
    {
      nome: 'Nome lista 1',
      id: 0,
      todos: [
        {
          id: 0,
          descricao: 'Aqui é a descrição do to-do 1',
          feito: false,
        }
      ]
    },
    {
      nome: 'Nome lista 2',
      id: 1,
      todos: [
        {
          id: 0,
          descricao: 'Aqui é a descrição do to-do 2',
          feito: false,
        }
      ]
    },
    {
      nome: 'Nome lista 3',
      id: 2,
      todos: [
        {
          id: 0,
          descricao: 'Aqui é a descrição do to-do 3',
          feito: false,
        }
      ]
    },
    {
      nome: 'Nome lista 4',
      id: 3,
      todos: [
        {
          id: 0,
          descricao: 'Aqui é a descrição do to-do 4',
          feito: false,
        }
      ]
    },
  ]
};

const getters = {
  getListas: (state) => state.listas,
};

const mutations = {
  addNewLista($state, payload) {
    const stateCopy = $state;
    const listas = stateCopy.listas;
    listas.push({
      ...payload,
      id: listas.length,
    });
  },
  addTodo($state, payload) {
    const stateCopy = $state;

    const indx = stateCopy.listas.findIndex((el) => (el.id == payload.lista));
    const todos = stateCopy.listas.at(indx).todos;

    todos.push({
      id: todos.length,
      descricao: payload.descricao,
      feito: false,
    }); 
  }
};

const actions = { 
  addTodo({ commit }, payload){
    commit('addTodo', payload);
  },
  addList({commit}, payload) {
    commit('addNewLista', {
      ...payload,
      todos: []
    })
  }

};

export default {
  state,
  mutations,
  actions,
  getters
};
