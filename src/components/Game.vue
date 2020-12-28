<template>
  <div class="Game">
    <div class="search">
      <router-link :to="{ path: '/' }">
        <div class="backtoHomepage">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span>返回商城</span>
        </div>
      </router-link>
      <div class="divide"><span>丨</span></div>
      <div class="title"><span>{{ this.$store.state.Games.Gamename }}</span></div>
      <div class="SearchBar">
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-search"></span>
          </span>
          <input type="text" class="form-control" placeholder="搜索" />
        </div>
      </div>
    </div>
    <div class="rotationchart">
      <div id="myCarousel" class="carousel slide">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img
              :src="this.$store.state.Games.RotationChart.img1"
              alt="First slide"
            />
          </div>
          <div class="item">
            <img
              :src="this.$store.state.Games.RotationChart.img2"
              alt="Second slide"
            />
          </div>
          <div class="item">
            <img
              :src="this.$store.state.Games.RotationChart.img3"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span> </a
        ><a
          class="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span></a
        >
      </div>
    </div>
    <div class="GameIntro">
      <div class="layer">
        <div class="icon">
          <PicZoom
            :url="this.$store.state.Games.GameLogo"
            :scale="3"
          ></PicZoom>
        </div>
        <div class="textintro">
          <div class="text">
            {{ this.$store.state.Games.GameIntro }}
          </div>
        </div>
        <div class="addToShoppingCart">
          <div class="price">
            <span class="price1">US${{ this.$store.state.Games.GamePrice }}</span>
          </div>
          <div>
            <button type="button" class="btn">立即购买</button>
            <button type="button" class="btn" @click="addShopCart">加入购物车</button>
            <transition name="shop_cart">
              <img class="add_img" v-if="addShow" :src="this.$store.state.Games.AddToShoppingCart">
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="relationIntro">
      <div class="lefttext">
        <span>关于{{ this.$store.state.Games.GamenameInEnglish }}</span>
      </div>
      <div class="rightdetail">
        <div class="partDetail">
          <div>
            <span class="producer">开发商</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.Producer }}</div>
        </div>
      </div>
      <div class="rightdetail">
        <div class="partDetail">
          <div>
            <span class="producer">发行商</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.Publisher }}</div>
        </div>
      </div>
      <div class="rightdetail-last">
        <div class="partDetail-last">
          <div>
            <span class="producer">发行日期</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.PublishedDate }}</div>
        </div>
      </div>
      <div class="rightdetail">
        <div class="partDetail">
          <div>
            <span class="producer">标签</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.Label }}</div>
        </div>
      </div>
      <div class="rightdetail">
        <div class="partDetail">
          <div>
            <span class="producer">评级</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.JudgeLevel }}</div>
        </div>
      </div>
      <div class="rightdetail-last">
        <div class="partDetail-last">
          <div>
            <span class="producer">平台</span>
          </div>
          <div class="inner">{{ this.$store.state.Games.Platform }}</div>
        </div>
      </div>
    </div>
    <div class="innertextIntro">
      <div class="lefttext-down"></div>
      <div class="righttext-down">
        <ul id="myTab" class="nav nav-tabs">
          <li class="active">
            <a href="#home" data-toggle="tab"> 游戏详情 </a>
          </li>
          <li><a href="#ios" data-toggle="tab">游戏评价</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
         <div class="tab-pane fade in active" id="home">
          <h1 class="heading">{{ this.$store.state.Games.IntroTitle }}</h1>
        <div class="css-Intro1">
          {{ this.$store.state.Games.IntroDetails.text1 }}
        </div>
        <div class="css-Intro1">
          <strong>{{ this.$store.state.Games.IntroDetails.strong1 }}</strong>
          <br />
          {{ this.$store.state.Games.IntroDetails.text2 }}
        </div>
        <div class="css-Intro1">
          <strong>{{ this.$store.state.Games.IntroDetails.strong2 }}</strong>
          <br />
          {{ this.$store.state.Games.IntroDetails.text3 }}
        </div>
        <div class="css-Intro1">
          <strong>{{ this.$store.state.Games.IntroDetails.strong3 }}</strong>
          <br />
          {{ this.$store.state.Games.IntroDetails.text4 }}
        </div>
        <div class="heading2">{{ this.$store.state.Games.MoreDetail.title2 }}</div>
        <ul class="css-Intro2">
          <li>{{ this.$store.state.Games.MoreDetail.li.text1 }}</li>
          <li>{{ this.$store.state.Games.MoreDetail.li.text2 }}</li>
          <li>{{ this.$store.state.Games.MoreDetail.li.text3 }}</li>
          <li>{{ this.$store.state.Games.MoreDetail.li.text4 }}</li>
          <li>{{ this.$store.state.Games.MoreDetail.li.text5 }}</li>
        </ul>
        <div class="detailPic">
          <img :src="this.$store.state.Games.MoreDetail.DetailPicture.img4" class="img2" />
        </div>
        <div class="detailPic">
          <img :src="this.$store.state.Games.MoreDetail.DetailPicture.img5" class="img2" />
        </div>
        <div class="detailPic">
          <img :src="this.$store.state.Games.MoreDetail.DetailPicture.img6" class="img2" />
        </div>
        </div>
          <div class="tab-pane fade" id="ios">
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player1 }}:<br></span>
             {{ this.$store.state.Games.PlayerComment.Comments.Com1 }}
            </div>
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player2 }}:<br></span>
              {{ this.$store.state.Games.PlayerComment.Comments.Com2 }}
            </div>
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player3 }}:<br></span>
             {{ this.$store.state.Games.PlayerComment.Comments.Com3 }}
            </div>
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player4 }}:<br></span>
              {{ this.$store.state.Games.PlayerComment.Comments.Com4 }}
            </div>
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player5 }}:<br></span>
             {{ this.$store.state.Games.PlayerComment.Comments.Com5 }}
            </div>
            <div class="Comment">
              <span class="Player">{{ this.$store.state.Games.PlayerComment.PlayerID.Player6 }}:<br></span>
              {{ this.$store.state.Games.PlayerComment.Comments.Com6 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PicZoom from 'vue-piczoom'
import axios from 'axios'
import mock from 'mockjs'
export default {
  name: 'App',
  components: {
    PicZoom
  },
  data () {
    return {
      addShow: false
    }
  },
  methods: {
    addShopCart () {
      this.addShow = true
      setTimeout(() => {
        this.addShow = false
      }, 1000)
      this.$store.state.ShoppingCart.push({
        Picture: this.$store.state.Games.AddToShoppingCart,
        Gname: this.$store.state.Games.Gamename,
        Price: this.$store.state.Games.GamePrice,
        num: 1
      })
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #737373;
}
.Game {
  background-color: #121212;
}
.search {
  width: 100%;
  height: 100px;
  background-color: #121212;
  margin-top: 53px;
  line-height: 90px;
}
.backtoHomepage {
  margin-left: 150px;
  float: left;
}
.divide {
  margin-left: 10px;
  color: #737373;
  float: left;
  display: block;
}
.title {
  float: left;
  width: 200px;
  margin-left: 10px;
  color: white;
}
.SearchBar {
  float: right;
  width: 300px;
  margin-right: 250px;
}
.input-group {
  margin-top: 20px;
}
.rotationchart {
  height: 680px;
  background-color: #121212;
}
#myCarousel {
  height: 630px;
  width: 1120px;
  margin: 0 auto;
}
.GameIntro {
  width: 100%;
  height: 220px;
  max-width: calc(1600px + (100vw / 72 * 9) + (100vw / 72 * 9));
  padding-left: calc(100vw / 72 * 9);
  padding-right: calc(100vw / 72 * 9);
  margin-left: auto;
  margin-right: auto;
  background-color: #121212;
}
.layer {
  margin: 0px;
}
.icon {
  width: 360px;
  height: 202.5px;
  background-color: #262626;
  border-radius: 5px;
  display: block;
  float: left;
}
.textintro {
  width: 855px;
  height: 202.5px;
  float: left;
  padding: 0 30px;
  flex-basis: 50%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
}
.text {
  font-size: 20px;
  color: white;
}
.addToShoppingCart {
  width: 200px;
  height: 202.5px;
  float: left;
  display: block;
}
.price {
  font-size: 1rem;
  color: white;
}
.price1 {
  float: right;
}
.btn {
  background-color: #ff1b50;
  float: right;
  color: white;
  width: 173px;
  height: 50px;
  margin-top: 10px;
}
.relationIntro {
  max-width: calc(1600px + (100vw / 72 * 9) + (100vw / 72 * 9));
  padding-left: calc(100vw / 72 * 9);
  padding-right: calc(100vw / 72 * 9);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 60px;
  height: 200px;
  background-color: #121212;
}
.lefttext {
  color: white;
  font-size: 20px;
  width: 360px;
  height: 200px;
  display: block;
  float: left;
}
.rightdetail {
  float: left;
  margin-bottom: 30px;
}
.producer {
  color: rgba(245, 245, 245, 0.6);
}
.partDetail {
  width: 452px;
  height: 51px;
}
.inner {
  display: inline-block;
  font-family: Brutal, sans-serif;
  line-height: 20px;
  font-size: 16px;
  color: white;
  margin-top: 5px;
}
.rightdetail-last {
  float: left;
  margin-bottom: 30px;
}
.partDetail-last {
  width: 123.06px;
  height: 51px;
}
.innertextIntro {
  max-width: calc(1600px + (100vw / 72 * 9) + (100vw / 72 * 9));
  padding-left: calc(100vw / 72 * 9);
  padding-right: calc(100vw / 72 * 9);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 2720px;
  background-color: #121212;
}
.lefttext-down {
  color: white;
  font-size: 20px;
  width: 360px;
  height: 2720px;
  display: block;
  float: left;
}
.righttext-down {
  width: 1063px;
  height: 2720px;
  display: block;
  float: left;
}
.heading {
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
}
.css-Intro1 {
  width: 1063px;
  height: 78px;
  color: rgba(245, 245, 245, 0.6);
  margin-bottom: 25px;
  text-size-adjust: 100%;
  display: block;
  letter-spacing: 0.2px;
  line-height: 1.625;
  font-size: 16px;
}
.heading2 {
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 25px;
  color: rgba(245, 245, 245, 0.6);
}
.css-Intro2 {
  margin-bottom: 25px;
  color: rgba(245, 245, 245, 0.6);
  margin-left: 6px;
  padding-left: 10px;
  list-style-type: disc;
  font-size: 16px;
  line-height: 1.625;
}
.detailPic {
  width: 1080px;
  height: 604.8px;
  margin-bottom: 25px;
}
.img2 {
  width: 1080px;
  height: 604.8px;
  border-radius: 5px;
}
.Comment{
  width: 1063px;
  height: 78px;
  color: rgba(245, 245, 245, 0.6);
  margin-bottom: 25px;
  text-size-adjust: 100%;
  display: block;
  letter-spacing: 0.2px;
  line-height: 1.625;
  font-size: 16px;
}
.Player{
  font-weight:bold;
  color: aliceblue;
}
.shop_cart .add{
    position: relative;
    margin-top: 100px;
    width: 500px;
    display: inline-block;
}
.add_img{
  height: 120px;
  width: 100px;
  border-radius: 5%;
  position: fixed;
  right: 210px;
  top: 0px;
}
@keyframes bounce-in {
    0% {
      transform: scale(1);
      transform: translate(-0px, 800px);
    }
    100% {
      transform: scale(.5);
      transform: translate(0px, 0px);
    }
  }
  .shop_cart-enter-active {
    animation: bounce-in 1s;
  }
</style>
