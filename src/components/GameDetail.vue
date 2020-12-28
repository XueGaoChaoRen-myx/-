<template>
    <div id="app">
    <Header></Header>
    <Game></Game>
    <Bottom></Bottom>
    </div>
</template>
<script>
import Header from './Header.vue'
import Bottom from './Bottom.vue'
import Game from './Game'
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'App',
  components: {
    Header,
    Bottom,
    Game
  },
  created () {
    if (this.$store.state.Games !== this.$store.state.GameList[this.$route.params.gname]) {
      this.$store.state.Games = this.$store.state.GameList[this.$route.params.gname]
      console.log('更改Games')
    } else {
      console.log('不用更改Games')
    }
  }
}
</script>
<style  scoped>
</style>
