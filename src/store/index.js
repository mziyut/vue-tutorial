import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex);

const Form = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState })  {
      commit('setStepCount', null, {root: true})
    },
  },
};

const Head = {
  state: {
    title: ["感想を入力", "確認画面", "送信完了"]
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount]
    },
  },
};

export default new Vuex.Store({
  modules: {
    Form,
  },
});

