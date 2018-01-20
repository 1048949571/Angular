
export default {

  namespace: 'example',

  state: {
    payload: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' ,payload});
      
    },
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'poststr' ,payload});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state,payload:state.payload +1};
    },
    poststr(state, action) {
      
      return { ...state,payload:state.payload -1 <=0 ? 0 : state.payload -1};
    },
  },

};
