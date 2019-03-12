<template>
  <div>
    <!-- 轮播图开始 -->
    <div class="slider">
      <div class="slider_inner">
        <el-carousel :interval="5000" height="500px">
          <el-carousel-item v-for="item in slider_list" :key="item">
            <img :src="item" alt class="slider_item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 轮播图结束 -->
    <!-- 楼层开始 -->
    <div class="row_box">
      <div class="hd">
        <h2 class="title">院线热映</h2>
        <!-- 分页组件 -->
        <page-small></page-small>
      </div>
      <div class="hd">
        <div class="video">
          <!-- 播放组件 -->
          <video
            width="100%"
            height="100%"
            controls="controls"
            src="https://mat1.gtimg.com/v/fayemeng/aquaman.mp4"
          ></video>
          <!-- <vue-video-player></vue-video-player> -->
        </div>
        <div class="figure">
          <div class="figure_default">
            <!-- 影片封面开始 -->
            <div class="figure_item" v-for="item in 10" :key="item">
              <a href class="figure_a">
                <img src="../../assets/images/0.jpeg" alt class="figure_img fi">
                <div class="figure_caption">01:33</div>
              </a>
              <div class="figure_detail">
                <a href class="figure_title">我的英雄学院·终极预告</a>
                <div class="figure_desc">师徒联手对敌让人泪目</div>
              </div>
            </div>
            <!-- 影片封面结束 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 楼层结束 -->
    <!-- 楼层开始 -->
    <figure-video v-for="item in 3" :key="item"></figure-video>
    <!-- 楼层结束 -->
  </div>
</template>

<script>
import pageSmall from "../../components/common/page/page";
import figureVideo from "../../components/common/figure/figure";
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
    pageSmall,
    figureVideo
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
    box-sizing: border-box;
    video {
      margin-top: -2px;
      object-fit: cover;
    }
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
    // overflow: hidden;
    .figure_default {
      position: relative;
      margin-right: -18px;
      margin-bottom: 0;
      // overflow: hidden;
    }
    .figure_item {
      float: left;
      display: inline-block;
      position: relative;
      margin: 0 18px 40px 0;
      padding: 0;
      color: #999;
      font-size: 12px;
      letter-spacing: normal;
      vertical-align: top;
      width: 198px;
    }
    .figure_video:hover .box-card {
      z-index: 11;
      opacity: 1;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
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
        vertical-align: bottom;
        border-radius: 4px;
        background: #f8f8f8;
        background-color: rgba(236, 236, 236, 0.1);
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
