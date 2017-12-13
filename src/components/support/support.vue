<template>
  <span class="icon" :class="iconSize">
    <i class="icon-item" :class="iconType"></i>
  </span>
</template>

<script>
  export default {
    props: {
      size: {
        type: [Number, String]
      },
      supports: {
        type: Number
      }
    },
    computed: {
      iconSize() {
        return 'icon-' + this.size
      },
      iconType() {
        return this.classMap[this.supports]
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"

  .icon
    font-size 0
    .icon-item
      display inline-block
      background-repeat no-repeat
    &.icon-14
      .icon-item
        vertical-align: top
        width: 14px
        height: 14px
        margin-right: 4px
        background-size: 14px 14px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')
    &.icon-16
      .icon-item
        vertical-align: top
        width: 16px
        height: 16px
        margin-right: 8px
        background-size: 16px 16px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')
    &.icon-16-4
      .icon-item
        vertical-align: top
        width: 16px
        height: 16px
        margin-right: 8px
        background-size: 16px 16px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_4')
        &.discount
          bg-image('discount_4')
        &.guarantee
          bg-image('guarantee_4')
        &.invoice
          bg-image('invoice_4')
        &.special
          bg-image('special_4')
    &.icon-18
      .icon-item
        vertical-align: top
        width: 18px
        height: 18px
        margin-right: 0
        background-size: 18px 18px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')

</style>