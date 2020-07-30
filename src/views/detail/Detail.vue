<template>
  <div>
    <a class="cricle-back" v-show="showAbs" @click="goBack"><i class="iconfont iconfanhui"></i></a>
    <Header :back="true" class="detail-header" v-show="!showAbs" :style="opacityStyle"><span slot="title">景点详情</span></Header>
    <Detail-banner></Detail-banner>
    <Detail-list :list="list"></Detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailList from './components/List.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Detail',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
      list: [
        {
          title: '成人票',
          children: [{ title: '成人三馆联票', children: [{ title: '成人三馆联票-某一连锁店' }] }, { title: '成人五馆联票' }],
        },
        { title: '学生票' },
        { title: '儿童票' },
        { title: '特惠票' },
      ],
    }
  },
  components: { DetailBanner, Header, DetailList },
  created() {},
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleScroll() {
      // 滚动条距离顶部的距离 依次来计算透明度的百分比
      const top = document.documentElement.scrollTop
      if (top > 20) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="stylus" scoped>
.detail-header{
  position fixed
  width: 100%;
  z-index: 2;
}
.cricle-back{
  position: absolute;
  z-index: 3;
  top: 0.15rem;
  left: 0.15rem;
}
</style>
