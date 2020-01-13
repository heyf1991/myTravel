<template>
  <div class="gallery" @click.stop="toCloseGallery">
    <div>
      <img src="https://dimg04.c-ctrip.com/images/300n0o000000fbhfb8E71_C_750_420_Q90.jpg" />
    </div>
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
  methods: {
    toCloseGallery() {
      this.$emit('handleCloseGallery')
    },
  },
}
</script>
<style lang="stylus" scoped>
.gallery{
  position fixed
  background #000
  top 0
  bottom 0
  left 0
  right 0
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    img{
      width 100%
    }
  }
}
</style>
