<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" @click.stop.prevent="decreaseCart" v-show="food.count>0"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {
    },
    methods: {
      addCart(event) {
        if(!this.food.count) {
          this.$set(this.food,'count',1)
        }else{
          this.food.count++
        }
      },
      decreaseCart() {
        if(this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      line-height: 24px
      font-size: 24px
      padding: 6px
      color: rgb(0, 160, 220)
      &.move-enter-active, &.move-leave-active
        transition all 0.5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(24px,0,0) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    
</style>