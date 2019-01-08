<template>
  <div class="container">
    <h2 class="mt-5 text-center">Catalog({{ totalCount }}) {{ totalPrice }}</h2>
    <CatalogList :products="products"/>
  </div>
</template>

<script>
import CatalogList from '../components/catalog/CatalogList'
import { mapGetters } from 'vuex'
export default {
  components: { CatalogList },
  computed: mapGetters({
    totalCount: 'Basket/getProductsQuantity',
    totalPrice: 'Basket/getProductsPrice'
  }),
  async asyncData({ app }) {
    const response = await app.$axios.get('/api/json/get/EyIoRdLoH')
    return {
      products: response.data
    }
  }
}
</script>

<style scoped>
</style>
