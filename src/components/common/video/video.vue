<template>
  <video-player
    style="object-fit: cover;"
    class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
    customEventName="customstatechangedeventname"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @statechanged="playerStateChanged($event)"
    @ready="playerReadied"
  ></video-player>
</template>

<script>
import defaultImg1 from "../../../assets/images/111.jpeg";
export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "zh-CN",
        aspectRatio: "16:9",
        fluid: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "https://mat1.gtimg.com/v/fayemeng/aquaman.mp4"
          }
        ],
        poster: defaultImg1,
        notSupportedMessage: "此视频暂无法播放，请稍后再试"
      }
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>

<style lang="less" scoped>
</style>

