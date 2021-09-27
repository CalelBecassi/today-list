const state = {
    current_user: {
        email: '',
    },
    users: [
       {
            email: 'teste@teste.com',
            senha: 'senha123'
       },
    ]
};

const getters = {
    getCurrentUser: (state) => state.current_user,
}

const mutations = {
    Login($state, payload){
        const stateCopy = $state;
        const current_user = stateCopy.current_user;

        if (current_user.email == '') {
            const user = $state.users.find((user) => user.email == payload.email && user.senha == payload.senha);

            if (user) {
                stateCopy.current_user.email = user.email;
            }
            else
                console.log("ERRO USER NOT FOUND"); 
        }
        else
            console.log("ERRO USER LOGGED");
    },
    Logout($state) {
        const stateCopy = $state;
        const current_user = stateCopy.current_user;

        if ( current_user.email.lenght != 0 ) {
            current_user.email = '';
        }
        else {
            console.log("ERRO YOU MUST BE LOGGED");
        }
    }
};

const actions = { 
    doLogin({commit}, payload){
        commit('Login', payload);
    },
    doLogout({commit}){
        commit('Logout');
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
