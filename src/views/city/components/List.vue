<template>
  <div class="city-list wrapper" ref="wrapper">
    <div class="content">
      <section class="section">
        <h3 class="title">当前城市</h3>
        <div class="content pd-t-r-l">
          <ul class="block-list">
            <li>
              <a>{{ this.city }}</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="section">
        <h3 class="title">热门城市</h3>
        <div class="content pd-t-r-l">
          <ul class="block-list">
            <li v-for="item in cityData.hotCities" :key="item.id">
              <a @click="handleChangeCity(item.name)">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="section" v-for="(item, key) of cityData.cities" :key="key" :ref="key">
        <h3 class="title">{{ key }}</h3>
        <div class="content">
          <ul class="item-list">
            <li v-for="(ct, index) in item" :key="index">
              <a @click="handleChangeCity(ct.name)">{{ ct.name }}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      scroll: {},
    }
  },
  props: {
    cityData: {
      type: [Object, Array],
    },
    letter: '',
  },
  mounted() {
    this.initScroll()
  },
  watch: {
    letter() {
      if (this.letter) {
        let ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    },
  },
  methods: {
    initScroll() {
      let t = setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
        clearTimeout(t)
      }, 50)
    },
    handleChangeCity(name) {
      // this.$store.commit('changeCity', name)
      this.changeCity(name)
      this.$router.push('/home')
    },
    ...mapMutations(['changeCity']),
  },
  computed: {
    ...mapState(['city']),
  },
}
</script>
<style lang="stylus" scoped>
.pd-t-r-l{
  padding .10rem .10rem 0
}
.city-list{
    position: absolute;
    bottom: 0;
    top: 0.8rem;
    left: 0;
    right: 0;
    overflow: hidden;
}
.section{
  .title{
    height 0.26rem
    background #eee
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
    line-height 0.26rem
    font-size 0.12rem
    padding 0 .10rem
    color: #444;
  }
  .content{
    .block-list{
      overflow hidden
      li{
        float left
        width 29%
        margin-bottom 0.1rem
        margin-right 0.1rem
        >a{
          text-align center
          height 0.28rem
          line-height 0.28rem
          border 1px solid #ddd
          border-radius 0.03rem
          display block
          color #333
        }
      }
    }
    .item-list{
      li{
        a{
          display block
          color #333
          border-bottom 1px solid #ddd
          height 0.28rem
          line-height 0.28rem
          padding 0 0.1rem
        }
      }
    }
  }
}
</style>
