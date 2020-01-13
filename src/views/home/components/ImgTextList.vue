<template>
  <div>
    <h3 class="section-title">热销推荐</h3>
    <ul class="img-text-list">
      <router-link tag="li" :to="{ name: 'Detail', params: { id: '0001' } }">
        <a href="javascript:;">
          <img src="https://dimg04.c-ctrip.com/images/30070k000000c9ddu1939_C_210_210.jpg" />
        </a>
        <div class="text">
          <h4>无锡拈花湾拈花客栈</h4>
          <p>无锡拈花湾拈花客栈+拈花湾门票</p>
          <button>查看详情</button>
        </div>
      </router-link>
      <router-link tag="li" :to="{ name: 'Detail', params: { id: '0002' } }">
        <a href="javascript:;">
          <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg" />
        </a>
        <div class="text">
          <h4>无锡拈花湾拈花客栈</h4>
          <p>无锡拈花湾拈花客栈+拈花湾门票</p>
          <button>查看详情</button>
        </div>
      </router-link>
      <router-link tag="li" :to="{ name: 'Detail', params: { id: '0003' } }">
        <a href="javascript:;">
          <img src="https://dimg04.c-ctrip.com/images/300s0d0000006scvxC032_C_210_210.jpg" />
        </a>
        <div class="text">
          <h4>无锡拈花湾拈花客栈</h4>
          <p>无锡拈花湾拈花客栈+拈花湾门票</p>
          <button>查看详情</button>
        </div>
      </router-link>
      <router-link tag="li" :to="{ name: 'Detail', params: { id: '0004' } }">
        <a href="javascript:;">
          <img src="https://dimg03.c-ctrip.com/images/fd/hotel/g6/M09/52/DE/CggYs1a0axqANcNLACBSTMszp_Q673_C_210_210.jpg" />
        </a>
        <div class="text">
          <h4>无锡拈花湾拈花客栈</h4>
          <p>无锡拈花湾拈花客栈+拈花湾门票</p>
          <button>查看详情</button>
        </div>
      </router-link>
      <router-link tag="li" :to="{ name: 'Detail', params: { id: '0005' } }">
        <a href="javascript:;">
          <img src="https://dimg03.c-ctrip.com/images/20080a0000004mxwtA88B_C_210_210.jpg" />
        </a>
        <div class="text">
          <h4>无锡拈花湾拈花客栈</h4>
          <p>无锡拈花湾拈花客栈+拈花湾门票</p>
          <button>查看详情</button>
        </div>
      </router-link>
    </ul>
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
.img-text-list{
  li{
    display flex
    background #fff
    padding 0.05rem
    border-bottom: .01rem solid #eee;
    a{
      width .9rem
      display block
      img{
        width .9rem
        height .9rem
      }
    }
    .text{
      h4{
        font-size .16rem
        line-height .34rem
      }
      p{
        color #999
        line-height .22rem
      }
      button{
        line-height: .22rem;
        margin-top: 0.04rem;
        background: #ff9300;
        padding: 0.03rem 0.1rem;
        border-radius: 0.06rem;
        color: #fff;
        font-size: .12rem;
      }
    }
  }
}
.text{
  padding-left: 0.1rem;
}
</style>
