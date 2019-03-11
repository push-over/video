<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "./assets/style/common.less";
.video-js .vjs-big-play-button {
      font-size: 3em;
      line-height: 1.5em;
      height: 1.5em;
      width: 3em;
      display: block;
      position: absolute;
      top: 155px;
      left: 270px;
      padding: 0;
      cursor: pointer;
      opacity: 1;
      border: 0.06666em solid #fff;
      background-color: #2b333f;
      background-color: rgba(43, 51, 63, 0.7);
      border-radius: 0.3em;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
    }
</style>
