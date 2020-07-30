<template>
  <div class="detail-list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <i class="iconfont iconxiaosanjiao"></i>
        <span>{{ item.title }}</span>
        <Detail-list :list="item.children" v-if="item.children"></Detail-list>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: [Array],
  },
  data() {
    return {}
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.detail-list{
  ul{
    li{
      padding-left .12rem
      line-height: .24rem;
      i{
        color $bgColor;
      }
    }
  }
}
</style>
