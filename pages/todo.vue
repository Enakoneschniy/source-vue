<template>
  <div class="container">
    <h1>ToDo List</h1>
    <NewTodo/>
    <TasksList/>
  </div>
</template>

<script>
import TasksList from '../components/todo/TasksList'
import NewTodo from '../components/todo/NewTodo'
export default {
  name: 'Todo',
  components: { NewTodo, TasksList }
}
</script>

<style scoped>
</style>
