import Vue from 'vue';

const ApiService = {

  get(resourcePath) {
    return new Promise((resolve) => {
      Vue.axios
        .get(resourcePath).then((response) => {
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
        .put(resourcePath, params).then((response) => {
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
        .post(`${resourcePath}`, params).then((response) => {
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
        .delete(`${resourcePath}`, { data: params }).then((response) => {
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
        .get(`${resourcePath}`, { params }).then((response) => {
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
