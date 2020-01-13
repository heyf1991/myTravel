<template>
  <div class="page bg-gray">
    <Header></Header>
    <div class="scroll-content">
      <Swiper></Swiper>
      <Icons class="mt10 pb5"></Icons>
      <Img-text-list></Img-text-list>
      <h3 class="section-title">周末去哪儿</h3>
    </div>
  </div>
</template>
<script>
import Header from '@/views/home/components/Header.vue'
import Swiper from '@/components/Swiper.vue'
import Icons from './components/Icons.vue'
import ImgTextList from './components/ImgTextList.vue'
export default {
  components: {
    Header,
    Swiper,
    Icons,
    ImgTextList,
  },
  computed: {},
  methods: {},
}
</script>
<style lang="stylus" scoped></style>
