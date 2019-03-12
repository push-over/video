<template>
  <div>
    <!-- 播放器开始 -->
    <div class="container container_player">
      <div class="container_inner">
        <div class="player_container">
          <div class="player_section">
            <div class="player">
              <!-- 视屏播放器开始 -->
              <video-player></video-player>
              <!-- 视屏播放器结束 -->
            </div>
            <div class="action">
              <div class="action_wrap">
                <div class="action_item">
                  <a href class="action_title">
                    <span class="action_txt">
                      <em>1518.0万</em>次专辑播放
                    </span>
                  </a>
                </div>
                <div class="action_item">
                  <a href class="action_title">
                    <span class="action_txt">分享</span>
                  </a>
                </div>
                <div class="action_item">
                  <a href class="action_title">
                    <span class="action_txt">手机看</span>
                  </a>
                </div>
                <div class="action_item">
                  <a href class="action_title">
                    <span class="action_txt">赠片</span>
                  </a>
                </div>
                <div class="action_item">
                  <a href class="action_title">
                    <span class="action_txt">举报</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="player_side">
            <div class="player_body">
              <div class="top">
                <div class="header">
                  <h2 class="title">
                    <a href>坑爹游戏</a>
                  </h2>
                </div>
              </div>
              <div class="wrap">
                <ul class="wrap_list">
                  <li class="list_item" v-for="(v,k) in 10" :key="k">
                    <a href class="figure">
                      <img src="../../assets/images/1.jpeg" alt class="figure_img">
                      <div class="count">
                        <span class="num">00:32</span>
                      </div>
                    </a>
                    <a href class="detail">
                      <span class="detail_three_row">
                        <strong class="figure_title">《坑爹游戏》片花 汪东城偶像包袱碎一地</strong>
                      </span>
                      <div class="figure_num">
                        <span class="num">41.2万</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 播放器结束 -->
    <figure-video></figure-video>
  </div>
</template>

<script>
import figureVideo from "../../components/common/figure/figure";
import videoPlayer from "../../components/common/video/video";

export default {
  components: {
    videoPlayer,
    figureVideo
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  word-break: break-all;
  .container_inner {
    width: 1710px;
    margin: 0 auto;
    .player_container {
      width: 100%;
      position: relative;
      z-index: 2;
      margin: auto;
    }
    .player_section {
      position: relative;
      width: 1390px;
      height: 832px;
      background-color: #000;
    }
    .player {
      position: relative;
      width: 100%;
      height: 782px;
      background-color: #111;
      user-select: none;
      video {
        object-fit: cover;
      }
    }
    .action {
      position: relative;
      z-index: 3;
      height: 50px;
      background-color: #26262b;
      color: #999;
      user-select: none;
    }
    .action_wrap {
      position: relative;
      float: left;
    }
    .action_item {
      float: left;
      height: 50px;
      .action_title {
        margin-left: 15px;
        padding-left: 20px;
        font-size: 12px;
        osition: relative;
        z-index: 3;
        display: block;
        height: 36px;
        line-height: 24px;
        padding: 14px 15px 0 17px;
        cursor: pointer;
        white-space: nowrap;
        color: #999;
        text-decoration: none;
      }
    }
    .player_side {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      float: right;
      width: 320px;
      height: 100%;
      background-color: #26262b;
      color: #666;
      .player_body {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
      }
      .top {
        width: 100%;
      }
      .wrap {
        position: relative;
        height: 100%;
        width: 100%;
        zoom: 1;
        overflow-y: auto;
        overflow-x: hidden;
        transform: translateZ(0);
        backface-visibility: hidden;
        flex: 1;
      }
      .wrap::-webkit-scrollbar {
        width: 4px;
      }
      .wrap::-webkit-scrollbar-track {
        background-color: #333338;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
      }
      .wrap::-webkit-scrollbar-thumb {
        background-color: #555;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
      }
      .wrap_list {
        list-style: none;
      }
      .list_item {
        position: relative;
        display: block;
        height: 74px;
        padding: 8px 0 8px 140px;
        margin: 0;
        vertical-align: top;
        font-size: 12px;
        color: #999;
        letter-spacing: normal;
        a {
          color: #bbb;
          text-decoration: none;
        }
        a:hover {
          color: #ff6428;
        }
      }
      .figure {
        position: absolute;
        left: 0;
        width: 130px;
        height: 74px;
        margin: 0;
        overflow: hidden;
      }
      .detail {
        padding-right: 10px;
        position: relative;
        display: block;
        height: 74px;
        .detail_three_row {
          display: block;
          height: 60px;
          overflow: hidden;
        }
        .figure_num {
          position: absolute;
          bottom: -2px;
          color: #999;
        }
        .figure_title {
          display: block;
          line-height: 20px;
          max-height: 60px;
          font-size: 14px;
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          word-wrap: break-word;
          word-break: break-all;
          width: 100%;
        }
      }
      .figure_img {
        width: 100%;
        height: 100%;
        display: block;
        background: #ececec;
        background-color: rgba(236, 236, 236, 0.1);
        user-select: none;
        max-width: 100%;
        max-height: 100%;
      }
      .count {
        position: absolute;
        left: 4px;
        bottom: 4px;
        background-color: rgba(17, 17, 17, 0.8);
        line-height: 20px;
        color: #fff;
        padding: 0;
        height: 20px;
        overflow: hidden;
        font-size: 0;
      }
      .num {
        display: inline-block;
        line-height: 20px;
        vertical-align: top;
        font-size: 12px;
        margin: 0 5px;
        max-width: 100px;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 3;
        padding: 16px 0 5px 20px;
      }
      .title {
        position: relative;
        z-index: 2;
        font-size: 22px;
        line-height: 32px;
        margin: 0 58px 0 0;
        font-weight: 500;
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: #ff6428;
        }
      }
    }
  }
}
.container_player {
  padding: 0;
  background: #2e2e36;
  z-index: 15;
}
</style>
