<template>
  <li class="product-item">
    <img
      :src="product.image"
      @click="test">
    <h3 class="product-title">{{ product.title }}</h3>
    <div class="product-bottom">
      <span class="price">{{ product.price }} USD</span>
      <button
        class="btn btn-success btn-sm"
        @click="onAdd(product)">Buy</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      onAdd: 'Basket/addToBasket'
    }),
    test() {
      alert('test')
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  &-item {
    box-sizing: border-box;
    margin: 10px;
    border: 2px solid transparent;
    padding: 5px;
    &:hover {
      border: 2px solid lightgray;
    }
  }
  &-title {
    margin-top: 5px;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
