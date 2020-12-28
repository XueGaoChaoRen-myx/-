<template>
    <div id="app">
    <Header></Header>
    <ErrorPage></ErrorPage>
    <Bottom></Bottom>
    </div>
</template>
<script>
import Header from './Header.vue'
import Bottom from './Bottom.vue'
import ErrorPage from './ErrorPage.vue'
export default {
  name: 'App',
  components: {
    Header,
    Bottom,
    ErrorPage
  }
}
</script>
<style  scoped>
</style>
