<template>
  <section class="container">
    <div class="row mt-4 justify-content-center">
      <h1
        class="text-center"
        @click="onClick(title, $event)">Blog</h1>
    </div>
    <input 
      :value="title"
      type="text"
      @input="onInput($event.target.value)">
    {{ title }}
    <List :items="posts"/>
  </section>
</template>

<script>
import List from '../components/blog/List'
export default {
  name: 'Blog',
  components: { List },
  data() {
    return {
      title: 'Test title',
      posts: []
    }
  },
  async asyncData({ app }) {
    const response = await app.$axios.get('/api/json/get/EyIoRdLoH')
    return {
      posts: response.data
    }
  },
  methods: {
    onInput(value) {
      this.title = value
    },
    onClick(data, event) {
      console.log('onClick', data, event)
    }
  }
}
</script>

<style scoped>
</style>
