/* import { createStore } from 'redux'
import Reducer from './Reducers/home'


const store = createStore(Reducer)

export default store */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './Reducers/home'
import createSageMiddleware from 'redux-saga'
//import rootSagas from './sagas'
const loggerMiddleware = createLogger()
const sageMiddleware = createSageMiddleware()


export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      sageMiddleware,
      loggerMiddleware
    )
  )
  //sageMiddleware.run(rootSagas)
}
