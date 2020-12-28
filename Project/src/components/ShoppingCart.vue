<template>
  <div class="app">
    <div class="shoppingcart-title">
      <h2 class="Title">我的购物车</h2>
    </div>
    <div class="shoppingcart">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>选中</th>
              <th>序号</th>
              <th>游戏封面</th>
              <th>游戏详情</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(games,index) in this.$store.state.ShoppingCart" :key="index">
              <label>
                <td><input type="checkbox" class="checkItem" :value="games.GamePrice"></td>
              </label>
              <td>{{ index+1 }}</td>
              <td><img :src="games.Picture" class="img1"></td>
              <td>{{ games.Gname }}</td>
              <td>US${{ games.Price*games.num }}</td>
              <td><button @click="games.num===1?1:games.num--" style="color:black">-</button>
                        {{ games.num }}
                    <button @click="games.num++" style="color:black">+</button></td>
              <td><button type="button" class="btn btn-danger" @click="Delete(index)">删除</button></td>
            </tr>
            <div><label for="quan"><input type="checkbox" @click="SelectAllChange" id="quan">全选 <br/></label></div>
            <div>总价</div>
          </tbody>
          <div></div>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkData: [],
      all: ['true']
    }
  },
  watch: {
    checkData: {
      handler () {
        if (this.checkData.length === this.$store.state.ShoppingCart.length) {
          document.querySelector('#quan').checked = true
        } else {
          document.querySelector('#quan').checked = false
        }
      },
      deep: true
    }
  },
  methods: {
    Delete (index) {
      this.$store.state.ShoppingCart.splice(index, 1)
    },
    SelectAllChange () {

    }
  },
  computed: {
    len () {
      var count = this.$store.state.ShoppingCart.length
      return count
    }
  }
}
</script>
<style scoped>
.app {
  background-color: #2a2a2a;
  width: 100%;
  height: 800px;
}
.shoppingcart-title {
  text-align: center;
  color: white;
  margin-top: 54px;
  padding-top: 20px;
  height: 100px;
}
.table {
  background-color: #2a2a2a;
  color: rgba(245, 245, 245, 0.6);
}
.img1{
  height: 120px;
  width: 100px;
}
</style>
