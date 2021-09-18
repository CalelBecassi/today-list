const state = {
  listas: 
  [
    {
      nome: 'Nome lista 1',
      id: 0,
      todos: [
        {
          description: 'Aqui é a descrição do to-do 1',
          checked: false,
        }
      ]
    },
    {
      nome: 'Nome lista 2',
      id: 1,
      todos: [
        {
          description: 'Aqui é a descrição do to-do 2',
          checked: false,
        }
      ]
    },
    {
      nome: 'Nome lista 3',
      id: 2,
      todos: [
        {
          description: 'Aqui é a descrição do to-do 3',
          checked: false,
        }
      ]
    },
    {
      nome: 'Nome lista 4',
      id: 3,
      todos: [
        {
          description: 'Aqui é a descrição do to-do 4',
          checked: false,
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
    stateCopy.listas.push(payload);
  },
  addTodo($state, payload) {
    const stateCopy = $state;

    const indx = stateCopy.listas.findIndex((el) => (el.id == payload.lista));

    stateCopy.listas.at(indx).todos.push({
      description: payload.description,
      checked: false,
    });
  }
};

const actions = { 
  addTodo({ commit }, payload){
    commit('addTodo', payload);
  }

};

export default {
  state,
  mutations,
  actions,
  getters
};
