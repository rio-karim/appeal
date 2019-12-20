<template>
  <div class="AppealBlog">
    <div class="container pt-5 pb-5">
      <loader v-if="!ready" />
      <div :class="{ 'd-cloak': !ready }">
        <post
          v-for="(post, i) in posts"
          :post="post"
          :key="`post-${i}`"
          class="AppealBlog__post"
        />
        <div class="AppealBlog__load">
          <button
            @click="getPosts"
            class="AppealBlog__load-button font-weight-bold mb-4 ml-4"
          >
            // LOAD MORE ARTICLES
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Post from '~/components/Post'
import Loader from '~/components/Loader'
export default {
  components: {
    Post,
    Loader
  },
  data() {
    return {
      ready: false
    }
  },
  computed: mapGetters('Posts', {
    posts: 'getPostsList'
  }),
  beforeMount() {
    this.getPosts().then(() => {
      setTimeout(() => {
        this.ready = true
      }, 2000)
    })
  },
  methods: mapActions('Posts', {
    getPosts: 'addPosts'
  })
}
</script>

<style lang="scss">
.d-cloak {
  visibility: hidden;
}
.AppealBlog {
  background: url(../assets/appeal.png) 20% center no-repeat;
  background-size: cover;
  .container {
    min-height: 100vh;
    position: relative;
    max-width: 760px;
  }
  &__post {
    width: 50%;
    transition: width 0.5s ease-in-out;
    @media (max-width: 575px) {
      width: 100%;
    }
    height: 380px;
  }
  &__load {
    position: absolute;
    left: 0;
    bottom: 0;
    &-button {
      font-size: 12px;
      background: none;
      border: none;
      color: secondary(opal);
    }
  }
}
</style>
