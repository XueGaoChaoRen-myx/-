<template>
  <div class="app">
    <div class="ModalBase-card">
      <div class="layout-vertical">
        <div class="EpicLogo-layout">
          <div class="EpicLogo">
            <img src="static\Header\epic-logo-invert.png" id="img1" />
          </div>
        </div>
        <h6 class="Logintext">用 EPIC GAMES账户登陆</h6>
        <form class="Loginform">
          <div class="EmailAddress">
            <div class="EmailAddress-child">
              <input
                type="text"
                class="form-control"
                id="EmailAddress"
                placeholder="电子邮件地址"
                v-model="newAccount.Email"
              />
            </div>
          </div>
          <div class="Password">
            <div class="Password-child">
              <input
                type="text"
                class="form-control"
                id="Password"
                placeholder="密码"
                v-model="newAccount.Password"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <label class="rememberme"
                ><input type="checkbox" /><span class="remembertext"
                  >记住我</span
                ></label
              >
              <a
                href="#"
                id="to-forget-password"
                aria-label="忘记密码"
                class="TrackedLinkButton"
              >
                <p class="Forget-password">忘记密码</p>
              </a>
            </div>
          </div>
          <div class="controls-vetical">
            <div class="Loginnow">
              <button type="button" class="btn btn-primary btn-lg btn-block" @click="login">
                <span style="font-size: 12px">现在登录</span>
              </button>
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
          <p class="withoutAccount">没有 Epic Games账户？</p>
          <router-link :to="{ path: '/RegisterPage' }"
            ><a href="#" id="to-register" aria-label="注册"
              ><p>注册</p></a
            ></router-link
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
      flag: false,
      newAccount: {
        Email: '',
        Password: ''
      }
    }
  },
  methods: {
    login () {
      for (let user of this.$store.state.Users) {
        if (this.newAccount.Email === user.Email && this.newAccount.Password === user.Password) {
          this.$store.state.LoginEmail = this.newAccount.Email
          this.flag = true
          this.$router.push('/')
          break
        }
      }
      if (!this.flag) {
        swal('电子邮件地址或密码错误！')
      }
    }
  }
}

</script>
<style scoped>
.app {
  background-color: #121212;
  width: 100%;
  height: 1000px;
}
.ModalBase-card {
  display: inline-block;
  margin-top: 200px;
  margin-left: 700px;
  width: 470px;
  height: 560px;
  padding: 50px 60px 40px 60px;
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
.Logintext {
  margin-top: 30px;
  color: white;
}
.Loginform {
  width: 350px;
  height: 300px;
}
.EmailAddress {
  width: 350px;
  height: 50px;
  margin-top: 15px;
}
.EmailAddress-child {
  width: 350px;
  height: 50px;
}
.form-control {
  height: 100%;
}
.Password {
  width: 350px;
  height: 50px;
  margin-top: 15px;
}
.Password-child {
  width: 350px;
  height: 50px;
}
.rememberme {
  color: #8a8a8a;
  float: left;
}
.remembertext {
  margin-left: 5px;
}
.form-group {
  width: 350px;
  height: 20px;
  margin-top: 15px;
}
.TrackedLinkButton {
  float: right;
  color: #8a8a8a;
  text-decoration: none;
}
.controls-vetical {
  width: 350px;
  height: 65px;
  margin-top: 15px;
}
.Loginnow {
  width: 350px;
  height: 65px;
}
.btn {
  background-color: #037bee;
  color: #eff7fb;
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
.withoutAccount {
  color: #8a8a8a;
}
#to-register {
  text-decoration: none;
  color: white;
}
</style>
