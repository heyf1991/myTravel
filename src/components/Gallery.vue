<template>
  <div class="gallery" @click.stop="toCloseGallery">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
        ><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/300m0q000000geb5o1606_C_750_420_Q90.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/300n0o000000fbhfb8E71_C_750_420_Q90.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/300c0q000000g7ew0F6C1_C_750_420_Q90.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/300g0q000000gm7l14774_C_750_420_Q90.png" alt=""
      /></swiper-slide>
      <!-- Optional controls -->
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
        },
        loop: false,
        observer: true,
        observeParents: true,
      },
    }
  },
  mounted() {
    /* console.log('啦啦啦啦', this.swiper)

    this.swiper.slideTo(0, 2000, false) */
    let t = setTimeout(() => {
      this.swiperOption = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
        },
        loop: false,
        observer: true,
        observeParents: true,
      }
      this.swiper.slideTo(0, 2000, false)
      this.swiper.init()
      clearTimeout(t)
    }, 1000)
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  methods: {
    toCloseGallery(e) {
      if (e.target.className === 'swiper-img') return
      this.$emit('handleCloseGallery')
    },
  },
}
</script>
<style lang="stylus" scoped>
.gallery{
  position fixed
  background #000
  top 0
  bottom 0
  left 0
  right 0
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    img{
      width 100%
    }
  }
}
</style>
