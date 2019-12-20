import Vuex from 'vuex'
import Posts from './posts'

const createStore = () =>
  new Vuex.Store({
    modules: {
      Posts
    }
  })

export default createStore
