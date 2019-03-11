<template>
  <div>
    <!-- 导航 -->
    <head-top></head-top>
    <!-- 轮播图 -->
    <div class="slider">
      <div class="slider_inner">
        <el-carousel :interval="5000" height="500px">
          <el-carousel-item v-for="item in slider_list" :key="item">
            <img :src="item" alt class="slider_item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 热映楼层 -->
    <div class="row_box">
      <div class="hd">
        <h2 class="title">院线热映</h2>
        <!-- 分页切换 -->
        <page-small></page-small>
      </div>
      <!-- 视频播放 -->
      <div class="hd">
        <div class="video">
          <vue-video-player></vue-video-player>
        </div>
        <div class="figure">
          <div class="figure_default">
            <div class="figure_item" v-for="item in 10" :key="item">
              <a href class="figure_a">
                <img src="../../assets/images/0.jpeg" alt class="figure_img">
                <div class="figure_caption">01:33</div>
              </a>
              <div class="figure_detail">
                <a href class="figure_title">我的英雄学院·终极预告</a>
                <div class="figure_desc">师徒联手对敌让人泪目</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 首播楼层 -->
    <div class="row_box" v-for="item in 3" :key="item">
      <div class="hd">
        <h2 class="title">首播影院</h2>
        <!-- 分页切换 -->
        <page-small></page-small>
      </div>
      <div class="hd">
        <div class="figure_md">
          <div class="figure_default">
            <div class="figure_item" v-for="item in 16" :key="item">
              <a href class="figure_a">
                <img src="../../assets/images/220.jpeg" alt class="figure_img">
                <div class="figure_caption">01:55:11</div>
                <div class="figure_score">7.0</div>
                <img src="../../assets/images/mark_1.png" alt="" class="mark">
              </a>
              <div class="figure_detail">
                <a href class="figure_title">我的英雄学院·终极预告</a>
                <div class="figure_desc">师徒联手对敌让人泪目</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <foot-buttom></foot-buttom>
  </div>
</template>

<script>
import headTop from "../../components/header/hade";
import footButtom from "../../components/footer/foot";
import pageSmall from "../../components/common/page/page";
import vueVideoPlayer from "../../components/common/video/video";
import defaultImg1 from "../../assets/images/11.jpeg";
import defaultImg2 from "../../assets/images/111.jpeg";
import defaultImg3 from "../../assets/images/1111.jpeg";
export default {
  data() {
    return {
      slider_list: [defaultImg1, defaultImg2, defaultImg3]
    };
  },
  components: {
    headTop,
    footButtom,
    pageSmall,
    vueVideoPlayer
  }
};
</script>

<style lang="less" scoped>
.slider {
  z-index: 1;
  position: relative;
  margin-top: -40px;
  margin-bottom: 30px;
  overflow: hidden;
  .slider_item {
    width: 100%;
    height: 100%;
  }
}

.row_box {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  clear: both;
  .hd {
    z-index: 2;
    position: relative;
    width: 1710px;
    margin: 0 auto;
    white-space: nowrap;
    .title {
      display: inline-block;
      position: relative;
      height: 40px;
      margin: 0 10px 20px 0;
      color: #111;
      font-size: 30px;
      font-weight: 400;
      line-height: 40px;
      vertical-align: top;
      white-space: nowrap;
    }
  }
  .video {
    position: relative;
    width: 630px;
    height: 378px;
    margin: 0 18px 0 0;
    float: left;
    overflow: hidden;
    background-color: #000;
    padding-top: 12px;
    box-sizing: border-box;
  }
  .figure_md {
    width: 1710px;
    .figure_a {
      height: 277px;
    }
  }
  .figure {
    width: 1062px;
    .figure_a {
      height: 111px;
    }
  }
  .figure,
  .figure_md {
    float: left;
    overflow: hidden;
    .figure_default {
      position: relative;
      margin-right: -18px;
      margin-bottom: 0;
      overflow: hidden;
    }
    .figure_item {
      display: inline-block;
      position: relative;
      margin: 0 18px 40px 0;
      padding: 0;
      color: #999;
      font-size: 12px;
      letter-spacing: normal;
      vertical-align: top;
      width: 198px;
      float: left;
    }
    .figure_a {
      display: block;
      position: relative;
      width: 198px;
      margin-bottom: 14px;
      border-radius: 4px;
      .figure_img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        background: #f8f8f8;
        background-color: rgba(236, 236, 236, 0.1);
        vertical-align: bottom;
      }
      .figure_caption {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        height: 20px;
        padding: 10px 10px 4px;
        overflow: hidden;
        border-radius: 0 0 4px 4px;
        background: linear-gradient(0deg, #000, #000 25.5%, #000 70%, #000);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.3) 25.5%,
          rgba(0, 0, 0, 0.08) 70%,
          rgba(0, 0, 0, 0)
        );
        color: #fff;
        font-size: 13px;
        letter-spacing: normal;
        line-height: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }
      .figure_score {
        position: absolute;
        right: 2px;
        bottom: 0;
        width: 35px;
        height: 28px;
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        line-height: 28px;
        color: #ff5c38;
      }
      .mark {
        position: absolute;
        top: 5px;
        right: 5px;
        pointer-events: none;
      }
    }
    .figure_detail {
      height: 44px;
      overflow: hidden;
    }
    .figure_title {
      width: 100%;
      height: auto;
      word-wrap: break-word;
      max-height: 44px;
      font-size: 15px;
      text-overflow: ellipsis;
      font-weight: 700;
      line-height: 23px;
      white-space: normal;
      word-break: break-all;
      letter-spacing: 0;
      text-decoration: none;
    }
    .figure_desc {
      display: block;
      width: 100%;
      margin-top: 3px;
      overflow: hidden;
      font-size: 13px;
      line-height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: default;
    }
  }
}
</style>
