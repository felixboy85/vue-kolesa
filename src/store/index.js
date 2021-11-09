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
      const clothes = { url: 'templates/7ZW3y5GAuIge/data' };
      axios.get(clothes.url).then(({ data }) => {
        if (data && Object.keys(data).length) {
          commit('updateUserInfo', data);
        }
      }).catch((error) => console.log('Something wrong', error));
    },
    fetchClothesInfo({ commit }) {
      const acc = { url: 'templates/-_RLsEGjof6i/data' };
      axios.get(acc.url).then((response) => {
        commit('updateClothes', response.data);
      }).catch((error) => console.log('Something wrong', error));
    },
    fetchAccInfo({ commit }) {
      const user = { url: 'templates/q3OPxRyEcPvP/data' };
      axios.get(user.url).then((response) => {
        commit('updateAcc', response.data);
      }).catch((error) => console.log('Something wrong', error));
    },
  },
});
