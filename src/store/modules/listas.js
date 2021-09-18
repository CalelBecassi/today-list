const state = {
  listas: 
  [
    {
      nome: 'Nome lista 1',
      id: 0,
      color: '#FD7F7F',
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
      color: '#7FC1FD',
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
      color: '#FDC37F',
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
      color: '#3FA736',
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

// CREATE RETURN UPDATE DELETE
const colors = ['#FD7F7F','#7FC1FD','#FDC37F','#3FA736'];

const getters = {
  getListas: (state) => state.listas,
};

const mutations = {
  addNewLista($state, payload) {
    const stateCopy = $state;
    const listas = stateCopy.listas;
    const color = colors.shift();

    listas.push({
      ...payload,
      id: listas.length,
      color: color,
      todos: [],
    });

    colors.push(color);
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
    commit('addNewLista', payload)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
