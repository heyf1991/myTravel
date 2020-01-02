<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/zg0q1b000001aoz7a2BA8.jpg" alt=""/></swiper-slide>
      <swiper-slide><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/zg0q1b000001apb3m48B1.jpg" alt=""/></swiper-slide>
      <swiper-slide><img class="swiper-img" src="https://dimg04.c-ctrip.com/images/zg051b000001b504h115F.jpg" alt=""/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 400,
        loop: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper.slideTo(0, 2000, false)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="stylus" scoped>
.swiper-wrapper>>>.swiper-pagination-bullet-active
  background #fff !important
.swiper-wrapper
  touch-action: none;
  overflow hidden;
  height:1.7rem
.swiper-img
  width 100%
  position: relative;
  top: -0.3rem;
</style>
