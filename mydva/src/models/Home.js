import {getList} from '../services/Home'
export default {
    namespace: 'Home',
    state: {
      datalist: null
    },
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ x }, { call, put }) {  // eslint-disable-line
        const datalist = yield call (getList)
        yield put({ type: 'save' ,datalist});
        
      },
    },
    reducers: {
      save(state, action) {
        return { ...state,datalist:action.datalist};
      },
    },
  
  };
  