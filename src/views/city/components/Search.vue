<template>
  <div class="city-search-box">
    <input type="text" class="city-search" placeholder="请输入城市名或者拼音" />
  </div>
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
@import '~styles/varibles.styl';
.city-search-box{
  height 0.35rem
  background $bgColor
  padding 0 0.15rem 0.05rem
  .city-search{
    width 100%
    border-radius 0.1rem
    height .3rem
    text-align center
  }
}
</style>
