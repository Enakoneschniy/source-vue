<template>
  <div>
    <input
      v-model="title"
      type="text" >
    <button
      @click.prevent="onAdd"
      @keydown.enter="onAdd">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NewTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onAdd() {
      this.addTask(this.title)
      this.title = ''
    },
    ...mapActions({
      addTask: 'Todo/addTask'
    })
  }
}
</script>

<style scoped>
</style>
