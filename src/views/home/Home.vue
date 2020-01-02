<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons class="mt10 mb10"></Icons>
  </div>
</template>
<script>
import Header from '@/views/home/components/Header.vue'
import Swiper from '@/components/Swiper.vue'
import Icons from './components/Icons.vue'
export default {
  components: {
    Header,
    Swiper,
    Icons,
  },
  computed: {},
  methods: {},
}
</script>
<style lang="stylus" scoped></style>
