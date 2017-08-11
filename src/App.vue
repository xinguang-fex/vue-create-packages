<template>
  <div id="app" class="content-wrap">
   <!--  <img src="./assets/logo.png"> --> <!-- 可以注释掉 -->
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
<style>
#app {
    height: 100%;
    width: 100%;
}
</style>
<style lang="scss">
  @import 'style/base';
  @import 'style/common';
</style>
