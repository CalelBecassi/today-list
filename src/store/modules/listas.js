import ListResource from "../../api/resources/list";

const state = {
  listas: []
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
  },
  setListas($state,payload) {
    const stateCopy = $state;
    stateCopy.listas = payload;
  }
};

const actions = { 
  addTodo({ commit }, payload){
    commit('addTodo', payload);
  },
  addList({commit}, payload) {
    commit('addNewLista', payload)
  },
  fetchListas( {commit} ) {
    ListResource.listas().then((res) => {
      commit('setListas', res);
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
