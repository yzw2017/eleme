<template>
  <div class="pic" ref="pic">
    <div class="pic-group" ref="picGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() => {
        this._initPics()
        this._initScroll()
      })
    },
    methods: {
      _initPics() {
        let children = this.$refs.picGroup.children
        let picWidth = 120, margin = 6
        let width = (picWidth + margin) * children.length - margin
        this.$refs.picGroup.style.width = width + 'px'
      },
      _initScroll() {
        if(!this.scroll) {
          this.scroll = new BScroll(this.$refs.pic, {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        }else{
          this.scroll.refresh()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pic-group
    font-size: 0
    .pic-item
      display: inline-block
      margin-right: 6px
      width: 120px
      height: 90px
      &:last-child
        margin: 0
</style>