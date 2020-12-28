<template>
  <div class='Shopping-center'>
    <div id='EpicShopping'>
      <div class='store'>
        <small class='epicstore'>
          <span>Epic Games商城</span>
        </small>
      </div>
      <div class='title1'>
        <span class='explore'>探索</span>
        <span
          ><svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='currentColor'
            class='bi bi-caret-down'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z'
            /></svg
        ></span>
      </div>
      <div class='search input-group'>
        <span class='input-group-addon'
          ><svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            color='black'
            class='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
            />
            <path
              fill-rule='evenodd'
              d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
            /></svg
        ></span>
        <input
          type='text'
          class='form-control'
          placeholder='Search for Games'
        />
      </div>
    </div>
    <div class='rotation-chart'>
      <div id='myCarousel' class='carousel slide'>
        <ol class='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to='0' class='active'></li>
          <li data-target='#myCarousel' data-slide-to='1'></li>
          <li data-target='#myCarousel' data-slide-to='2'></li>
        </ol>
        <div class='carousel-inner'>
          <div class='item active'>
            <router-link :to="{path:'/GameDetail/CyberPunk'}">
              <img
                src='static\Shopping list\rotation-chart\cyberpunk.png'
                alt='First slide'
                class='img1'
              />
            </router-link>
            <div class='carousel-caption'>Cyberpunk2077</div>
          </div>
          <div class='item'>
             <router-link :to="{path:'/GameDetail/Fortnite'}">
            <img
              src='static\Shopping list\rotation-chart\fornite.jpg'
              alt='Second slide'
              class='img2'
            />
            </router-link>
            <div class='carousel-caption'>FORTINITE</div>
          </div>
          <div class='item'>
            <router-link :to="{path:'/GameDetail/Warframe'}">
            <img
              src='static\Shopping list\rotation-chart\warframe.jpg'
              alt='Third slide'
              class='img3'
            />
            </router-link>
            <div class='carousel-caption'>WarFrame</div>
          </div>
        </div>
        <a
          class='left carousel-control'
          href='#myCarousel'
          role='button'
          data-slide='prev'
        >
          <span
            class='glyphicon glyphicon-chevron-left'
            aria-hidden='true'
          ></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='right carousel-control'
          href='#myCarousel'
          role='button'
          data-slide='next'
        >
          <span
            class='glyphicon glyphicon-chevron-right'
            aria-hidden='true'
          ></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </div>
    <div class='GamesSort'>
      <div class='Selector'>筛选器</div>
      <hr
        style='filter: alpha(opacity=100, finishopacity=0, style=1)'
        width='100%'
        color='grey'
      />
      <div class='css-1k3geus'>
        <div class='sort'>分类</div>
        <div class='arrow'>
          <span class='glyphicon glyphicon-chevron-down'></span>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail1()'
              >动作</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 1'>
          <div class='detail'>
            <router-link :to="{path:'/GameDetail/CaveStory'}" class='detaillink' href='#'><span>Cave Story |</span></router-link>
            <router-link :to="{path:'/GameDetail'}" class='detaillink' href='#'>Chronos |</router-link>
            <a class='detaillink' href='#'>CRSED</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail2()'
              >冒险</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 2'>
          <div class='detail'>
            <a class='detaillink' href='#'>再编译 |</a>
            <a class='detaillink' href='#'>Kena:Bridge of Spirits |</a>
            <a class='detaillink' href='#'>Twin Mirror</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail3()'
              >体育</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 3'>
          <div class='detail'>
            <a class='detaillink' href='#'>Football Manager 2020 |</a>
            <a class='detaillink' href='#'>Football Manager 2021 |</a>
            <a class='detaillink' href='#'>Football Manager 2021 Touch</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail4()'
              >竞速</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 4'>
          <div class='detail'>
            <a class='detaillink' href='#'>Art of Rally |</a>
            <a class='detaillink' href='#'>Dangerous Driving |</a>
            <a class='detaillink' href='#'>WRC 8</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail5()'
              >角色扮演</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 5'>
          <div class='detail'>
            <a class='detaillink' href='#'>赛博朋克 2077 |</a>
            <a class='detaillink' href='#'>天国：拯救 |</a>
            <a class='detaillink' href='#'>Phoniex Point</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail6()'
              >射击</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 6'>
          <div class='detail'>
            <a class='detaillink' href='#'>无主之地3 |</a>
            <a class='detaillink' href='#'>Crysis Remastered |</a>
            <a class='detaillink' href='#'>HITMAN</a>
          </div>
        </div>
      </div>
      <div @mouseleave='hidedetail()'>
        <div class='css-1k3geus'>
          <div class='sort'>
            <a
              class='btn btn-reverse btn-block'
              href='#'
              role='button'
              @mouseenter='showdetail7()'
              >战略</a
            >
          </div>
        </div>
        <div class='DetailSort' v-if='flag == 7'>
          <div class='detail'>
            <a class='detaillink' href='#'>地下城3 |</a>
            <a class='detaillink' href='#'>Democracy 4 |</a>
            <a class='detaillink' href='#'>Warhammer 40,000</a>
          </div>
        </div>
      </div>
    </div>
    <div class='NewGamePart'>
      <div class='newPublishedGames'>
        <h3 class='newgametitle'>新发布游戏</h3>
      </div>
      <div class='GameZone'>
        <div class='GameDetail1' v-for="(games,index) in this.$store.state.NewPublishedGames" :key="index">
          <a role='link' href='#'>
            <div class='GameDetail2'>
              <div>
                <img
                  :src='games.img'
                  class='picture'
                />
              </div>
              <div>
                <span style='color: white'>{{ games.name }}</span>
              </div>
              <div>
                <span>{{ games.company }}</span>
              </div>
              <div style='margin-top: 5px'>
                <span style='color: white'>{{ games.price }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class='BestSellerPart'>
      <div class='BestSellerGames'>
        <h3 class='bestsellertitle'>畅销游戏</h3>
      </div>
      <div class='GameZone'>
        <div class='GameDetail1' v-for="(games,index) in this.$store.state.BestSellers" :key="index">
          <router-link :to="{path:'/GameDetail'}">
            <div class='GameDetail2'>
              <div>
                <img
                  :src='games.img'
                  class='picture'
                />
              </div>
              <div>
                <span style='color: white'>{{ games.name }}</span>
              </div>
              <div>
                <span>{{ games.company }}</span>
              </div>
              <div style='margin-top: 5px'>
                <span style='color: white'>{{ games.price }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class='EpicUploadPart'>
      <div class='EpicUploadGames'>
        <h3 class='EpicUploadtitle'>Epic游戏商城最新上架</h3>
      </div>
      <div class='GameZone'>
        <div class='GameDetail1' v-for="(games,index) in this.$store.state.RecentGames" :key="index">
          <a role='link' href='#'>
            <div class='GameDetail2'>
              <div>
                <img :src='games.img' class="picture">
              </div>
              <div>
                <span style='color: white'>{{ games.name }}</span>
              </div>
              <div>
                <span>{{ games.company }}</span>
              </div>
              <div style='margin-top: 5px'>
                <span style='color: white'>{{ games.price }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: 0
    }
  },
  methods: {
    showdetail1 () {
      this.flag = 1
    },
    showdetail2 () {
      this.flag = 2
    },
    showdetail3 () {
      this.flag = 3
    },
    showdetail4 () {
      this.flag = 4
    },
    showdetail5 () {
      this.flag = 5
    },
    showdetail6 () {
      this.flag = 6
    },
    showdetail7 () {
      this.flag = 7
    },
    hidedetail () {
      this.flag = 0
    }
  }
}
</script>
<style scoped>
.Shopping-center {
  background-color: #121212;
}
#EpicShopping {
  position: absolute;
  top: 53px;
  height: 100px;
  width: 100%;
  text-align: center;
  background-color: #121212;
}
.store {
  margin-top: 15px;
}
.title1 {
  height: 14px;
  color: white;
}
.epicstore {
  color: rgba(245, 245, 245, 0.6);
}
.explore {
  font-size: 14px;
}
.search {
  width: 170px;
  margin: 0 auto;
  margin-top: 10px;
}
.rotation-chart {
  margin-top: 153px;
  width: 1200px;
  margin-left: 250px;
  float: left;
}
.img1 {
  width: 1200px;
  height: 800px;
}
.img2 {
  width: 1200px;
  height: 800px;
}
.img3 {
  width: 1200px;
  height: 800px;
}

.form-control {
  width: 200px;
}
.GamesSort {
  width: 245px;
  height: 850px;
  background-color: #121212;
  margin-left: 1500px;
}
.Selector {
  padding-top: 178px;
  color: white;
}
.css-1k3geus {
  width: 245px;
  height: 61px;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  border-radius: 3px;
  color: rgba(245, 245, 245, 0.6);
}
.sort {
  width: 110px;
  height: 19px;
  float: left;
}
a {
  text-decoration: none;
  color: rgba(245, 245, 245, 0.6);
}
.arrow {
  width: 20px;
  height: 12px;
  display: block;
  line-height: normal;
  font-size: 1rem;
  cursor: pointer;
  float: right;
}
.btn {
  text-align: left;
}
.NewGamePart {
  width: 1086px;
  height: 429.53px;
}
.newPublishedGames {
  width: 1086px;
  height: 30px;
  display: block;
  margin-left: 250px;
}
.newgametitle {
  color: white;
}
.GameZone {
  width: 1500px;
  height: 384.53px;
  margin-left: 250px;
}
.GameDetail1 {
  width: 204.41px;
  height: 384.53px;
  float: left;
  margin-right: 5%;
}
.GameDetail2 {
  width: 204.41px;
  height: 384.53px;
  margin-top: 20px;
}
.GameDetail4 {
  width: 204.41px;
  height: 384.53px;
  float: left;
  margin-right: 0%;
}
.picture {
  width: 204.39px;
  height: 272.53px;
  border-radius: 3%;
}
.bestsellertitle {
  color: white;
}
.BestSellerPart {
  width: 1086px;
  height: 429.53px;
}
.BestSellerGames {
  width: 1086px;
  height: 30px;
  display: block;
  margin-left: 250px;
}
.EpicUploadtitle {
  color: white;
}
.EpicUploadPart {
  width: 1086px;
  height: 429.53px;
}
.EpicUploadGames {
  width: 1086px;
  height: 30px;
  display: block;
  margin-left: 250px;
}
.DetailSort {
  background-color: #121212;
  height: 61px;
  width: 300px;
}
.detaillink {
  line-height: 42px;
}
</style>
