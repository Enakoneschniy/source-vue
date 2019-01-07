<template>
  <div class="container">
    <h2 class="mt-5 text-center">Catalog</h2>
    <CatalogList :products="products"/>
  </div>
</template>

<script>
import CatalogList from '../components/catalog/CatalogList'
export default {
  components: { CatalogList },
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
