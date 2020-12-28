<template>
<div>
    <Header></Header>
    <Login></Login>
    <Bottom></Bottom>
</div>
</template>
<script>
import Header from './Header'
import Bottom from './Bottom'
import Login from './Login'
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  components: {
    Header,
    Bottom,
    Login
  },
  mounted () {
    axios.get('http://localhost:8080/#/LoginPage').then(res => {
      this.$store.state.Users = res.data.Users
      console.log(this.$store.state.Users)
    })
  }
}
</script>
<style scoped>
</style>
