<template>
  <header class="common-header">
    <div class="header-left" v-if="back" @click="goBack">
      <i class="iconfont iconfanhui"></i>
    </div>
    <slot name="title"></slot>
  </header>
</template>
<script>
export default {
  props: {
    back: {
      type: Boolean,
    },
  },
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.common-header{
  height $headerHeight;
  background $bgColor;
  line-height $headerHeight;
  text-align center;
  color #fff;
  font-size 0.16rem;
  .header-left{
    width 0.45rem
    text-align center
    line-height 0.45rem;
    color #fff;
    position:absolute;
  }
}
</style>
