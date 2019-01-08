<template>
  <ul class="product-list d-flex flex-wrap">
    <Product
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<script>
import Product from './Product'

export default {
  name: 'CatalogList',
  components: { Product },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.product-list {
  list-style: none;
  justify-content: space-between;
}
</style>
