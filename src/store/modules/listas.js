const state = {
  listas: 
  [
    {
      nome: 'Nome lista',
      todos: [
        {
          description: 'Aqui é a descrição do to-do',
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
  addNewTodo($state, payload) {
    const stateCopy = $state;
    
    stateCopy.forEach(lista, index => {

    });
  }
};

const actions = { 

};

export default {
  state,
  mutations,
  actions
};
