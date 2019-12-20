const namespaced = true
const state = {
  postsList: [],
  postsAmount: 0
}
const getters = {
  getPostsList: (state) => (state.postsList.length ? state.postsList : null)
}
const mutations = {
  setPostsList(state, action) {
    state.postsList.push(...action)
  },
  setPostsAmount(state, action) {
    state.postsAmount = isNaN(parseInt(action)) ? 0 : parseInt(action)
  }
}
const actions = {
  async addPosts({ commit, state }) {
    const response = await fetch('/posts.json')
    const { data } = await response.json()
    const newPosts = data.filter(
      (post, i) => i >= state.postsAmount && i < state.postsAmount + 4
    )
    commit('setPostsList', newPosts)
    commit('setPostsAmount', state.postsList.length)
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
