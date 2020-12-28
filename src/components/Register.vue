<template>
  <div id="app">
    <div class="ModalBase-card">
      <div class="layout-vertical">
        <div class="EpicLogo-layout">
          <div class="EpicLogo">
            <img src="static\Header\epic-logo-invert.png" id="img1" />
          </div>
        </div>
        <h6 class="Registertext">注册</h6>
        <form class="Registerform">
          <div class="form-group">
            <select class="form-control">
              <option>China</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Japan</option>
              <option>Korea,Republic of</option>
            </select>
          </div>
          <div class="name-fields">
            <div class="Name">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="*名"
              />
            </div>
            <div class="FamilyName">
              <input
                type="text"
                class="form-control"
                id="FamilyName"
                placeholder="*姓"
              />
            </div>
          </div>
          <div class="ShowName">
            <div class="ShowName-child">
              <input
                type="text"
                class="form-control"
                id="ShowName"
                placeholder="*显示名称"
              />
            </div>
          </div>
          <div class="EmailAddress">
            <div class="EmailAddress-child">
              <input
                type="text"
                class="form-control"
                id="EmailAddress"
                placeholder="*电子邮件地址"
                v-model="newUser.Email"
              />
            </div>
          </div>
          <div class="Password">
            <div class="Password-child">
              <input
                type="text"
                class="form-control"
                id="Password"
                placeholder="*密码"
                v-model="newUser.Password"
              />
            </div>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" />我想收到来自 Epic
              Games的消息、问卷调查和特惠。
            </label>
          </div>
          <div class="checkbox">
            <label class="Agreement">
              <input type="checkbox" />我已阅读并同意&nbsp;
            </label>
            <a
              href="https://www.epicgames.com/tos?lang=en"
              class="seviceProtest"
            >
              <p>服务协议</p>
            </a>
          </div>
          <div class="continue">
              <div class="continue-child">
                  <button type="button" class="btn btn-default btn-lg btn-block" @click="handleAddUser">继续</button>
              </div>
          </div>
          <div class="PrivacyLink">
            <a
              id="to-privacy"
              href="https://www.epicgames.com/privacypolicy?lang=en"
              ><p class="MuiTypography-root MuiTypography-body1">隐私政策</p></a
            >
          </div>
        </form>
        <div class="alternative">
          <p class="withAccount">已有 Epic Games账户？</p>
          <router-link :to="{ path: '/LoginPage' }"
            ><a id="to-Login" aria-label="登录"><p>登录</p></a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      newUser: {
        Email: '',
        Password: ''
      }
    }
  },
  methods: {
    handleAddUser () {
      this.$store.dispatch('addUser', {
        'Email': this.newUser.Email,
        'Password': this.newUser.Password
      })
      swal('注册成功！')
      this.$router.push('/LoginPage')
    }
  }
}
</script>
<style scoped>
#app {
  width: 100%;
  height: 836px;
  background-color: #121212;
}
.ModalBase-card {
  display: inline-block;
  margin-top: 55px;
  margin-left: 700px;
  width: 470px;
  height: 770px;
  padding: 28px 60px 50px 60px;
  background-color: #2a2a2a;
}
.layout-vertical {
  width: 350px;
  height: 460px;
}
.EpicLogo-layout {
  width: 350px;
  height: 50px;
}
.EpicLogo {
  width: 50px;
  height: 50px;
  display: block;
  margin-left: 147px;
}
#img1 {
  width: 44px;
  height: 50px;
}
.Registertext {
  margin-top: 30px;
  color: white;
}
.Registerform {
  width: 350px;
  height: 508px;
}
.form-group {
  width: 350px;
  height: 50px;
}
.form-control {
  height: 100%;
}
.name-fields {
  height: 50px;
  margin-top: 15px;
}
.Name {
  width: 167.5px;
  height: 50px;
  float: left;
}
.FamilyName {
  width: 167.5px;
  height: 50px;
  float: right;
}
.ShowName {
  height: 50px;
  margin-top: 15px;
}
.ShowName-child {
  width: 350px;
  height: 50px;
}
.EmailAddress {
  height: 50px;
  margin-top: 15px;
}
.EmailAddress-child {
  width: 350px;
  height: 50px;
}
.Password {
  height: 50px;
  margin-top: 15px;
}
.Password-child {
  width: 350px;
  height: 50px;
}
label {
  color: #8a8a8a;
}
.Agreement {
  float: left;
}
.seviceProtest {
  text-decoration: none;
  color: white;
}
.continue{
    height: 50px;
    margin-top: 15px;
}
.continue-child{
    height: 50px;
}
.btn{
    height: 100%;
    background-color: #037BEE;
    border:none;
    color: white;
    font-size: 12px;
}
.PrivacyLink {
  width: 350px;
  height: 20px;
  margin-top: 35px;
}
#to-privacy {
  text-decoration: none;
  color: white;
  text-align: center;
}
.alternative {
  width: 350px;
  height: 20px;
  margin-top: 20px;
  text-align: center;
}
.withAccount {
  color: #8a8a8a;
}
#to-Login {
  text-decoration: none;
  color: white;
}
</style>
