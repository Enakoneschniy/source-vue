<template>
  <div class="blog-list">
    <ListItem
      v-for="item of items"
      :key="item.id"
      :post="item"
      @post-click="onPostClick"
    />
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  components: { ListItem },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onPostClick(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
</style>
