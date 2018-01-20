/* import { takeEvery } from 'redux-saga' 
import { put, fork } from 'redux-saga/effects'

// 工作
function* Worker() {
    yield put({type: 'SUCESS'})
    yield put({type: 'SUCESS1144'})
}

// 监听
function* watcher() {
    yield takeEvery('INCREMENT_ASYNC', Worker)
}

export default function* rootSages() {
  yield fork(watcher);
} */