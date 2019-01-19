import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from './mutation-types'

export default {
  addTask({ commit }, title) {
    commit(ADD_TASK, {
      title,
      id: new Date().getTime(),
      done: false
    })
  },
  removeTask({ commit }, taskId) {
    commit(REMOVE_TASK, taskId)
  },
  editTask({ commit }, task) {
    commit(EDIT_TASK, task)
  }
}
