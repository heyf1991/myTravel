<template>
  <div class="alphabet">
    <ul @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <li v-for="(item, key) in alphabetData.cities" :key="key" @click="alphabetClick" :ref="key">{{ key }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touchStatus: false,
    }
  },
  props: {
    alphabetData: {
      type: [Object, Array],
    },
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    alphabetClick(e) {
      this.$emit('changeAlphabet', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        let positionStart = this.$refs['A'][0].offsetTop
        let touchY = e.touches[0].clientY
        let index = Math.floor((touchY - positionStart - 80) / 20)
        let alphabetArr = Object.keys(this.alphabetData.cities)
        if (index >= 0 && index < alphabetArr.length) {
          this.$emit('changeAlphabet', alphabetArr[index])
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.alphabet{
  position absolute
  right 0
  top 0.8rem
  bottom 0
  display flex
  flex-direction column
  justify-content center
  ul{
    li{
      line-height .2rem
      color $bgColor
      text-align center
      width .2rem
    }
  }
}
</style>
