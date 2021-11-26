import Vue from 'vue';
import store from '../store';

const ApiService = {

  get(resourcePath) {
    return new Promise((resolve) => {
      Vue.axios
        .get(resourcePath, {
          headers: {
            token: store.getters.getBearerToken
          }
        }).then((response) => {
          resolve(response.data);
        }).catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Get', error.response.status);
        });
    });
  },

  put(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .put(resourcePath, params, {
          headers: {
            token: store.getters.getBearerToken
          }
        }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Put', error.response.status);
        });
    });
  },

  post(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .post(`${resourcePath}`, params, {
          headers: {
            token: store.getters.getBearerToken
          }
        }).then((response) => {
          resolve(response.data);
        }).catch((err) => {
          // Just to error dont show in console, axios handle the error;
          console.log('Error in Post', err);
        });
    });
  },

  delete(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .delete(`${resourcePath}`, { data: params, headers: {
          token: store.getters.getBearerToken
        }}).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Delete', error.response.status);
        });
    });
  },

  query(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .get(`${resourcePath}`, { params }, {
          headers: {
            token: store.getters.getBearerToken
          }
        }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          // Just to error dont show in console, axios handle the error;
          // console.log('Error in Query', error.response.status);
        });
    });
  },
};

export default ApiService;
