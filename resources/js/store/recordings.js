export default {
    namespaced: true,
    state: {
        recordings: [
            // 
        ],
    },

    getters: {
        getRecordings(state) {
            return state.recordings;
        },
    },

    mutations: {
        SET_RECORDINGS(state, recordings) {
            state.recordings = recordings;
        },
    },

    actions: {
        saveRecording ({state, commit}, data) {
            let recordings = state.recordings;
            data.id = recordings.length + 1
            recordings.push(data);
            commit('SET_RECORDINGS', recordings);
            console.log(recordings);
        },
        deleteRecording ({state, commit}, id) {
            let recordings = state.recordings;
            recordings = recordings.filter(item => item.id !== id)
            commit('SET_RECORDINGS', recordings);
        },
    },
};