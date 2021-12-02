import ListResource from "../../api/resources/list";

const state = {
  listas: [],
  publicListas: []
};

const getters = {
  getListas: (state) => state.listas,
  getPublicLists: (state) => state.publicListas,
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
  },
  setPublicLists($state,payload) {
    const stateCopy = $state;
    stateCopy.publicListas = payload;
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
    ListResource.newLista({ ...payload, todos: [] }).then((res) => {
      commit('addNewLista', res);
    });
  },
  deleteTodo({dispatch}, payload) {
    ListResource.deleteTodo({...payload}).then(() => {
      dispatch('fetchListas');
    })
  },
  fetchListas( {commit} ) {
    ListResource.listas().then((res) => {
      commit('setListas', res);
    })
  },
  fetchPublicLists({commit}) {
    ListResource.listasPublicas().then((res) => {
      console.log(res);
      commit('setPublicLists', res);
    })
  },
  deleteLista( { dispatch },payload ) {
    ListResource.deleteLista(payload).then(() => {
      dispatch('fetchListas');
    });
  },
  saveListas({getters}) {
    const listas = getters.getListas;

    listas.forEach(lista => {
      ListResource.saveLista(lista)
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
