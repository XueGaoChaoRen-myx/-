<template>
  <div id="div">
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src="static\Header\logo.png" id="img1" />
        </div>
        <div id="div1">
          <ul class="nav navbar-nav navbar-left">
            <li><router-link :to="{path:'/'}">商城</router-link></li>
            <li><router-link :to="{path:'/PageUnfound'}">新闻</router-link></li>
            <li><router-link :to="{path:'/PageUnfound'}">常见问题</router-link></li>
            <li><router-link :to="{path:'/PageUnfound'}">帮助</router-link></li>
            <li><router-link :to="{path:'/PageUnfound'}">虛幻引擎</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="{path:'/ShoppingCartPage'}"><span class="glyphicon glyphicon-shopping-cart" style="color: rgb(165, 163, 166); font-size: 19px;"></span></router-link></li>
            <li><img src="static\Header\Language.png" id="img2" /></li>
            <li><img src="static\Header\Login.png" id="img3" /></li>
            <li v-if="!this.$store.state.LoginEmail"><router-link :to="{path:'/LoginPage'}"><span>登录</span>
            </router-link>
            </li>
            <li v-if="this.$store.state.LoginEmail" class="User"><span>Hello! {{ this.$store.state.LoginEmail }}</span></li>
            <li v-if="this.$store.state.LoginEmail" class="exit"><a @click="Logout">退出</a></li>
            <li>
              <button type="button" class="button1 btn btn-primary">
                获取客户端
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    Logout () {
      this.$store.state.LoginEmail = ''
    }
  }
}
</script>
<style scoped>
#div {
  height: 53px;
  width: 100%;
  background-color: #2a2a2a;
  position: absolute;
  top: 0;
}
#img1 {
  width: 50px;
  height: 50px;
}
#img2 {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 4px;
}
#img3 {
  margin-top: 13px;
}
.button1 {
  height: 52px;
  width: 100px;
  border-radius: 0;
  background-color: #007dfc;
}
.navbar {
  background-color: #2a2a2a;
}
.User{
  color: white;
  margin-top: 15px;
}
.exit{
  color: white;
}
</style>
