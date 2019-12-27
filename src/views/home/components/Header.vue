<template>
  <header class="header">
    <div class="header-left">
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>
      <input type="text" placeholder="请输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">
      <span>城市</span>
      <i class="iconfont iconxiaosanjiao"></i>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  methods: {},
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header{
  height 0.45rem;
  background $bgColor;
  display flex
  .header-left{
    width 0.45rem
    text-align center
    line-height 0.45rem;
    color #fff
  }
  .header-input{
    flex 1
    position relative
    input{
      border-radius 10px;
      height 0.35rem;
      width 100%;
      margin-top 0.05rem;
      padding-left 0.3rem
    }
    .iconfont{
      position: absolute;
      color: #999;
      top: 0.14rem;
      left: 0.08rem;
    }
  }
  .header-right{
    width 0.65rem
    text-align center
    line-height 0.45rem;
    color #fff
    i{
      margin-left: -0.02rem;
    }
  }
}
</style>
