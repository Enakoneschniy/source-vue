import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from './mutation-types'

export default {
  [ADD_TASK](state, task) {
    state.tasks.push(task)
  },
  [REMOVE_TASK](state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  },
  [EDIT_TASK](state, { id, title }) {
    state.tasks = state.tasks.map(task => {
      if (task.id === id) {
        task.title = title
      }
      return task
    })
  }
}
