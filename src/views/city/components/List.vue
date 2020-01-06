<template>
  <div class="city-list">
    <section class="section">
      <h3 class="title">当前城市</h3>
      <div class="content pd-t-r-l">
        <ul class="block-list">
          <li><a>北京</a></li>
        </ul>
      </div>
    </section>
    <section class="section">
      <h3 class="title">热门城市</h3>
      <div class="content pd-t-r-l">
        <ul class="block-list">
          <li v-for="item in cityData.hotCities" :key="item.id">
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="section" v-for="(item, key) of cityData.cities" :key="key">
      <h3 class="title">{{ key }}</h3>
      <div class="content">
        <ul class="item-list">
          <li v-for="(ct, index) in item" :key="index">
            <a>{{ ct.name }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    cityData: {
      type: [Object, Array],
    },
  },
  components: {},
  created() {},
  computed: {},
  methods: {},
}
</script>
<style lang="stylus" scoped>
.pd-t-r-l{
  padding .10rem .10rem 0
}
.city-list{
    position: fixed;
    bottom: 0;
    top: 0.8rem;
    left: 0;
    right: 0;
    overflow: auto;
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
