<template>
  <header class="header">
    <div class="header-left">
      <i class="iconfont iconfanhui"></i>
    </div>
    <router-link class="header-right" tag="div" to="/city">
      <span>{{ this.city }}</span>
      <i class="iconfont iconxiaosanjiao"></i>
    </router-link>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>
      <input type="text" placeholder="请输入城市/景点/游玩主题" />
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {
    ...mapState(['city']),
  },
  methods: {},
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header{
  height 0.45rem;
  overflow hidden
  background $bgColor;
  .header-left{
    width 0.45rem
    text-align center
    line-height 0.45rem;
    color #fff
    float left
  }
  .header-input{
    position relative
    overflow hidden
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
    text-align center
    line-height 0.45rem;
    float right
    padding 0 0.07rem
    color #fff
    i{
      margin-left: -0.02rem;
    }
  }
}
</style>
