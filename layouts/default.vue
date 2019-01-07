<template>
  <div>
    <TheHeader/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
export default {
  components: { TheFooter, TheHeader }
}
</script>

<style>
</style>
