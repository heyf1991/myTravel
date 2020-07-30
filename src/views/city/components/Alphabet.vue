<template>
  <div class="alphabet">
    <ul @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <li v-for="(item, key) in alphabetData.cities" :key="key" @click="alphabetClick" :ref="key">{{ key }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touchStatus: false,
      positionStart: 0,
      alphabetArr: [],
      timer: null,
    }
  },
  props: {
    alphabetData: {
      type: [Object, Array],
    },
  },
  updated() {
    this.positionStart = this.$refs['A'][0].offsetTop
    this.alphabetArr = Object.keys(this.alphabetData.cities)
  },
  methods: {
    alphabetClick(e) {
      this.$emit('changeAlphabet', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY
          let index = Math.floor((touchY - this.positionStart - 80) / 20)
          if (index >= 0 && index < this.alphabetArr.length) {
            this.$emit('changeAlphabet', this.alphabetArr[index])
          }
        }, 16)
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
