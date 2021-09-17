const state = {
  listas: 
  [
    {
      nome: 'Nome lista 1',
      todos: [
        {
          description: 'Aqui é a descrição do to-do 1',
          checked: false,
        }
      ]
    },
    {
      nome: 'Nome lista 2',
      todos: [
        {
          description: 'Aqui é a descrição do to-do 2',
          checked: false,
        }
      ]
    },
    {
      nome: 'Nome lista 3',
      todos: [
        {
          description: 'Aqui é a descrição do to-do 3',
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
  // addNewTodo($state, payload) {
  //   const stateCopy = $state;
    
  //   stateCopy.forEach(lista, index => {

  //   });
  // }
};

const actions = { 

};

export default {
  state,
  mutations,
  actions,
  getters
};
