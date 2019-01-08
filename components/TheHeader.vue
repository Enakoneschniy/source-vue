<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <nuxt-link
        :to="{ name: 'home'}"
        class="navbar-brand">Project Name</nuxt-link>
      <div
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'blog' }"
              class="nav-link" 
            >Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'about' }"
              class="nav-link" 
            >About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'catalog' }"
              class="nav-link"
            >Catalog</nuxt-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto pull-right">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'catalog' }"
              class="nav-link"
            >Basket({{ totalCount }})</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: mapGetters({
    totalCount: 'Basket/getProductsQuantity'
  })
}
</script>

<style scoped>
.nav-link.router-link-exact-active {
  color: #fff !important;
}
</style>
