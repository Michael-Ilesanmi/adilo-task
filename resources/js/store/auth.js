export default {
    namespaced: true,
    state: {
        user: {
            id: 1,
            first_name: 'Cody',
            last_name: 'Fisher',
            full_name: 'Cody Fisher',
            email: 'CodyFisher@gmail.com',
            avatar: 'https://picsum.photos/200',
        },
    },

    getters: {
        user(state) {
            return state.user;
        },
    },

    mutations: {
        //
    },

    actions: {
        //
    },
};