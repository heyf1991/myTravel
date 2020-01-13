<template>
  <div class="wrapper">
    <div class="detail-banner" @click="handleShowGallery">
      <img src="https://dimg04.c-ctrip.com/images/300m0q000000geb5o1606_C_750_420_Q90.jpg" />
      <div class="detail-text">
        <h5>无锡拈花湾拈花客栈</h5>
        <div class="img-num">
          <i class="iconfont iconpic"></i>
          <span>33</span>
        </div>
      </div>
    </div>
    <Detail-gallery v-show="isShowGallery" @handleCloseGallery="closeGallery"></Detail-gallery>
  </div>
</template>
<script>
import DetailGallery from '@/components/Gallery.vue'
export default {
  data() {
    return {
      isShowGallery: false,
    }
  },
  components: {
    DetailGallery,
  },
  created() {},
  computed: {},
  methods: {
    handleShowGallery() {
      this.isShowGallery = true
    },
    closeGallery() {
      this.isShowGallery = false
    },
  },
}
</script>
<style lang="stylus" scoped>
.detail-banner{
  overflow hidden
  height:0
  width 100%
  padding-bottom:56%
  background #eee
  position relative
  img{
    width 100%
  }
  .detail-text{
    position absolute
    bottom 0.05rem
    color #fff
    width 100%
    h5{
      padding 0 0.1rem
      float left
      line-height .25rem
    }
    .img-num{
      background rgba(0,0,0,0.4)
      line-height .25rem
      border-radius .25rem
      padding 0 .12rem
      float right
      margin-right 0.1rem
    }
  }
}
</style>
