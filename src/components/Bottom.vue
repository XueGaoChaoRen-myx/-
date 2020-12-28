<template>
  <footer id="egf">
    <div id="icons">
      <img src="static\Bottom\facebook.png" />
      <img src="static\Bottom\twitter.png" id="img2" />
      <img src="static\Bottom\youtube.png" id="img3" />
    </div>
    <a href="#"><div id="upicon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-arrow-up-square"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          fill-rule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </div></a>
    <div class="footerLink-wrapper1">
      <div class="inner-wrap">
        <div id="resource">
          <span>资源</span>
        </div>
        <ul>
          <li>创作者支持计划</li>
          <li>在Epic Games上发布</li>
          <li>职业</li>
        </ul>
        <ul>
          <li>公司</li>
          <li>爱好者作品政策</li>
          <li>用户体验调查</li>
        </ul>
        <ul>
          <li>商城最终用户授权协议</li>
          <li>在线服务</li>
          <li>社区守则</li>
        </ul>
      </div>
    </div>
    <div class="footerLink-wrapper2">
      <div class="inner-wrap">
        <div id="develope">
          <span>由Epic Games开发</span>
        </div>
        <ul>
          <li>Battle Breakers</li>
          <li>Fortnite</li>
          <li>Infinity Blade</li>
          <li>Robo Recall</li>
        </ul>
        <ul>
          <li>Shadow Complex</li>
          <li>Spyjinx</li>
          <li>Unreal Tournament</li>
        </ul>
      </div>
    </div>
    <div id="Authorize">
      <img src="static\Bottom\Authorize.png" />
    </div>
    <div class="dividing-line">
      <hr color="#333333" />
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style scoped>
ul {
  color: #e7e7e7;
  list-style: none;
  float: left;
  margin-left: -25px;
}
#egf {
  background: #202020;
  width: 100%;
  height: 300px;
  margin-top: -10px;
  padding: 0 57px 0 57px;
  position: absolute;
}
#icons {
  margin-left: 15px;
  height: 54px;
  width: 1300px;
  margin-top: 30px;
  position: absolute;
  float: left;
}
#img3 {
  margin-top: 8px;
}
#img2 {
  margin-top: 5px;
  margin-left: 5px;
}
#upicon {
  width: 600px;
  height: 54px;
  margin-top: 30px;
  float: right;
}
#resource {
  margin-left: 15px;
}
span {
  font-size: 0.86em;
  font-weight: 700;
  color: #636363;
  display: block;
}
.bi {
  color: white;
  font-size: 20px;
  float: right;
  margin-right: 30px;
}
.inner-wrap {
  margin-top: 75px;
}
#develope {
  margin-left: 15px;
}
#Authorize {
  float: right;
  margin-top: -107px;
}
.dividing-line {
  margin-top: 98px;
}
.footerLink-wrapper1 {
  padding-top: 10px;
}
</style>
