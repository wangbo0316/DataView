export default {

  namespace: 'dvaState',

  state: {
    themee:'8',
    a:false
  },

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {

  },

  reducers: {
    changeState(state, {payload}) {
      return {...state, ...payload}
    }
  },

};
