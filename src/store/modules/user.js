import UserResource from "../../api/resources/user";

const state = {
    current_user: undefined
};

const getters = {
    getCurrentUser: (state) => state.current_user,
    getBearerToken: (state) => state.current_user? `Bearer ${state.current_user.token}` : ' ',
}

const mutations = {
    Login($state, payload) {
        const stateCopy = $state;
        const current_user = stateCopy.current_user;
        const {email, senha} = payload;

        if (!current_user) {
            UserResource.login({
                email,
                password: senha
            }).then((response) => {
                stateCopy.current_user = response;
            })
        }
        else
            console.log("ERRO USER LOGGED");
    },
    Logout($state) {
        const stateCopy = $state;
        const current_user = stateCopy.current_user;

        if ( current_user ) {
            stateCopy.current_user = undefined;
        }
        else {
            console.log("ERRO YOU MUST BE LOGGED");
        }
    },
};

const actions = { 
    doLogin({commit}, payload){
        commit('Login', payload);
    },
    doLogout({commit}){
        commit('Logout');
    },
    newUser(_, payload) {
        if (payload.senha !== '' && payload.senha === payload.confirmacaoSenha) {
            if (payload.email !== '') {
                UserResource.register({
                    name: payload.nome,
                    email: payload.email,
                    password: payload.senha
                }).then(() => {
                    window.alert('USUARIO CRIADO COM SUCESSO');
                });
            } else 
                throw new Error("EMAIL INVALIDO")
        }
        else
            throw new Error("SENHAS NAO COINCIDEM OU INVALIDA")
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
