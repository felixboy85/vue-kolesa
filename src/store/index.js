import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      score: 0,
      name: '',
      avatarUrl: '',
    },
    clothes: [],
    accesories: [],
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
    updateClothes(state, newClothes) {
      state.clothes = newClothes;
    },
    updateAcc(state, newAcc) {
      state.accesories = newAcc;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then(({ data }) => {
        if (data && Object.keys(data).length) {
          commit('updateUserInfo', data);
        }
      });
    },
    fetchClothesInfo({ commit }) {
      axios.get('templates/-_RLsEGjof6i/data').then((response) => {
        commit('updateClothes', response.data);
      });
    },
    fetchAccInfo({ commit }) {
      axios.get('templates/q3OPxRyEcPvP/data').then((response) => {
        commit('updateAcc', response.data);
      });
    },
  },
});
