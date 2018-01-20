/* eslint-disable no-unused-vars */
// 非异步加载的models
// import gamePortalModel from '../routes/game-portal/models'
import Home from './Home'
import example from './example'

export default function (app) {
  app.model(Home)
  app.model(example)
}
