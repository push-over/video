<template>
  <div>
    <head-top></head-top>
    <router-view></router-view>
    <shortcut></shortcut>
    <foot-buttom></foot-buttom>
  </div>
</template>

<script>
import headTop from "./components/header/hade";
import shortcut from './components/common/shortcut/shortcut';
import footButtom from "./components/footer/foot";
export default {
  components: {
    headTop,
    footButtom,
    shortcut
  }
};
</script>

<style lang="less">
@import "./assets/style/common.less";
</style>
