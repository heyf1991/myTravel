<template>
  <div id="app">
    <transition name="fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-enter-active {
  transition: all 0.2s linear;
}
.fadeIn-leave-active {
  transition: all 0.2s linear;
  opacity: 0;
}

.pull-enter-active,
.pull-leave-active {
  transition: all 0.2s;
}
.pull-enter,
.pull-leave-to {
  transform: translateX(100%);
}
</style>
