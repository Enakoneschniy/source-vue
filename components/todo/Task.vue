<template>
  <li>
    <input 
      :checked="task.done" 
      type="checkbox">
    <strong v-if="!isEdit">{{ task.title }}</strong>
    <input
      v-else
      v-model="task.title"
      type="text">
    <button @click="onRemove(task.id)">Remove</button>
    <button 
      v-if="!isEdit" 
      @click="onEdit">Edit</button>
    <button 
      v-else 
      @click="onSave(task.id)">Save</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    ...mapActions({
      onRemove: 'Todo/removeTask',
      editTask: 'Todo/editTask'
    }),
    onEdit() {
      this.isEdit = !this.isEdit
    },
    onSave() {
      this.isEdit = false
    }
  }
}
</script>

<style scoped>
</style>
