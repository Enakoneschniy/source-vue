<template>
  <div class="row mt-5 mb-3">
    <div class="media">
      <div class="media-body">
        <h2 
          class="mt-0" 
          @click="onClick(post)">{{ post.title }}</h2>
        <div v-html="post.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick(post) {
      this.$emit('post-click', post)
    }
  }
}
</script>

<style scoped>
</style>
