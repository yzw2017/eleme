<template>
  <div id="app">
    <m-header :seller="seller"></m-header>
    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <keep-alive>
      <router-view :seller="seller"/>
    </keep-alive>
  </div>
</template>

<script>
  import axios from 'axios'
  import MHeader from 'components/m-header/m-header'

  const ERR_OK = 0

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      axios.get('/api/seller').then((res) => {
        if(res.data.errno === ERR_OK) {
          this.seller = res.data.data
        }
      })
    },
    components: {
      MHeader
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      display: block
      text-align: center
      font-size: 14px
      color: rgb(77, 85, 93)
      &.router-link-active
        color: rgb(240, 20, 20)
</style>
