import Loadable from 'react-loadable'

import loading from '../Common/Loading' 
const Home= Loadable({
  loader: () => import('../containers/Home/Home.jsx'),
  loading: loading
})
const Collection= Loadable({
  loader: () => import('../containers/Collection/Collection.jsx'),
  loading: loading
})
const My= Loadable({
  loader: () => import('../containers/Register/Register.jsx'),
  loading: loading
})
const Details=Loadable({
  loader: () => import('../containers/Details'),
  loading: loading
})
const Tab=Loadable({
  loader: () => import('../components/My/Tab/sj.jsx'),
  loading: loading
})
export default{
    Home,
    Collection,
    My,
    Details,
    Tab
    
}