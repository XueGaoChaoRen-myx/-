<template>
<div>
    <Header></Header>
    <ShoppingCart></ShoppingCart>
    <Bottom></Bottom>
</div>
</template>
<script>
import Header from './Header'
import Bottom from './Bottom'
import ShoppingCart from './ShoppingCart'
export default {
  components: {
    Header,
    Bottom,
    ShoppingCart
  }
}
</script>
<style scoped>
</style>
