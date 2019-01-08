export default {
  getItems(state) {
    return state.basketItems
  },
  getProductsQuantity(state) {
    return state.basketItems.reduce((acc, product) => {
      return (acc += product.quantity)
    }, 0)
  },
  getProductsPrice(state) {
    return state.basketItems.reduce((acc, product) => {
      return (acc += product.quantity * product.price)
    }, 0)
  }
}
