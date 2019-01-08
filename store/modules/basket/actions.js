import { ADD_PRODUCT, CHANGE_QUANTITY, REMOVE_PRODUCT } from './mutation-types'

export default {
  addToBasket({ commit }, product) {
    product.quantity = 1
    commit(ADD_PRODUCT, product)
  },
  removeFromBasket({ commit }, productId) {
    commit(REMOVE_PRODUCT, productId)
  },
  changeQuantity({ commit }, info) {
    commit(CHANGE_QUANTITY, info)
  }
}
