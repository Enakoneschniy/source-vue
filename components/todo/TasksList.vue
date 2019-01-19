<template>
  <ul>
    <Task
      v-for="task of tasks"
      :key="task.id"
      :task="task"/>
  </ul>
</template>

<script>
import Task from './Task'
import { mapGetters } from 'vuex'

export default {
  name: 'TasksList',
  components: { Task },
  computed: mapGetters({
    tasks: 'Todo/getTasks'
  })
}
</script>

<style scoped>
</style>
