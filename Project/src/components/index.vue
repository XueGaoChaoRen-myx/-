<template>
  <div id="app">
    <Header></Header>
    <Homepage></Homepage>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from './Header.vue'
import Bottom from './Bottom.vue'
import Homepage from './Homepage.vue'
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'App',
  components: {
    Header,
    Bottom,
    Homepage
  },
  mounted () {
    axios.get('http://localhost:8080/games').then(res => {
      this.$store.state.NewPublishedGames = res.data.NewPublishedGames
      this.$store.state.BestSellers = res.data.BestSellers
      this.$store.state.RecentGames = res.data.RecentGames
      this.$store.state.GameList = res.data.GameList
      console.log(this.$store.state.GameList)
    })
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: white;
}
</style>
