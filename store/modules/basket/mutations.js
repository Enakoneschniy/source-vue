import { ADD_PRODUCT, CHANGE_QUANTITY, REMOVE_PRODUCT } from './mutation-types'

export default {
  [ADD_PRODUCT](state, product) {
    state.basketItems.push(product)
  },
  [CHANGE_QUANTITY](state, { productId, quantity }) {
    console.log(state, productId, quantity)
  },
  [REMOVE_PRODUCT](state, productId) {
    console.log(state, productId)
  }
}
