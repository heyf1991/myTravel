<template>
  <div class="search">
    <div class="city-search-box">
      <input type="text" v-model="keyword" class="city-search colorWhite" placeholder="请输入城市名或者拼音" />
    </div>
    <div class="search-content opacity" ref="scontent" v-show="keyword">
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        <li v-show="noData">暂无匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import $ from 'jquery'
export default {
  props: {
    cities: {
      type: [Object, Array],
    },
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll: {},
    }
  },
  watch: {
    keyword(kw) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let result = []
        for (const i in this.cities.cities) {
          // 遍历一个对象
          this.cities.cities[i].forEach(element => {
            if (element.spell.indexOf(kw) > -1 || element.name.indexOf(kw) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    },
  },
  components: {},
  created() {},
  mounted() {
    // 为了可以使用better-scroll修改的bug
    this.keyword = 'a' // better-scroll bug
    let t = setTimeout(() => {
      this.scroll = new BScroll(this.$refs.scontent, {})
      clearTimeout(t)
      this.keyword = '' // better-scroll bug
      $('.search-content').removeClass('opacity') // better-scroll bug
      $('.city-search').removeClass('colorWhite') // better-scroll bug
    }, 150)
  },
  computed: {
    noData() {
      return !this.list.length
    },
  },
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
.search-content{
  position fixed
  background #eee
  top 0.8rem
  bottom 0
  left 0
  right 0
  z-index 1
  overflow hidden
  ul{
    li{
      color #333
      border-bottom 1px solid #eee
      height 0.28rem
      line-height 0.28rem
      padding 0 0.1rem
      background #fff
    }
  }
}
.opacity{
  opacity 0
}
.colorWhite{
  color #fff
}
</style>
