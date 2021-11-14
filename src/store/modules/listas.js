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
    stateCopy.listas.push(payload);
  },
  setLista($state, payload) {
    const stateCopy = $state;
    const listas = stateCopy.listas;

    const lista = listas.find(el => el._id === payload._id);
    const index = listas.indexOf(lista);

    stateCopy.listas[index].todos = payload.todos;
  },
  setListas($state,payload) {
    const stateCopy = $state;
    stateCopy.listas = payload;
  }
};

const actions = { 
  addTodo({ commit }, payload){
    ListResource.newTodo(payload).then(
      (res) =>  {
        commit('setLista', res);
      }
    );
  },
  addList({commit}, payload) {
    const color = colors.shift();

    ListResource.newLista({ ...payload, color, todos: [] }).then((res) => {
      commit('addNewLista', res);
    });

    colors.push(color);
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
