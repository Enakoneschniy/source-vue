import { ADD_PRODUCT, CHANGE_QUANTITY, REMOVE_PRODUCT } from './mutation-types'

export default {
  addToBasket({ commit }, product) {
    product.quantity = 1
    commit(x, product)
  },
  removeFromBasket({ commit }, productId) {
    commit(REMOVE_PRODUCT, productId)
  },
  changeQuantity({ commit }, info) {
    commit(CHANGE_QUANTITY, info)
  },
  addTodo({ commit }, title) {
    commit(ADD_TODO, {
      title,
      id: new Date().getTime(),
      done: false
    })
  }
}
