<template lang="html">
  <div
    class="Post d-inline-flex justify-content-center align-items-center px-2 py-3"
  >
    <div class="Post__container">
      <div
        :style="`background: url(${post.thumbnail}) center center no-repeat;`"
        class="Post__container-img pb-4"
        alt="Thumbnail"
      />
      <div class="Post__container-meta text-uppercase font-weight-bold pt-4">
        <span class="Post__container-meta__category">
          {{ post.category.name }}</span
        >
        <span class="Post__container-meta__date"> // {{ postDate }}</span>
      </div>
      <div
        v-html="post.title"
        class="Post__container-title font-weight-bold pt-2 pb-3"
      />
      <nuxt-link to="/" class="Post__container-link font-weight-bold py-1 px-4"
        >read more</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Moment from 'moment'
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {
    postDate() {
      const timestamp = this.post.created_at
      return Moment.unix(timestamp).format('DD MMMM YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
.Post {
  @keyframes slide_in {
    from {
      transform: translateY(4%);
    }
    to {
      transform: translateY(0);
    }
  }
  animation: slide_in 0.5s cubic-bezier(0, 0.16, 0.11, 0.86) 1;
  &__container {
    width: 100%;
    &-img {
      width: 100%;
      height: 210px;
      background-size: cover !important;
    }
    &-link {
      background: none;
      border: solid primary(black) 2px;
      color: primary(black);
      font-size: 10px;
    }
    &-meta {
      font-size: 10px;

      &__category {
        color: primary(brand);
      }
      &__date {
        color: secondary(opal);
      }
    }
  }
}
</style>
