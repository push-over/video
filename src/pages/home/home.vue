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
    <div class="row_box" v-for="item in 3" :key="item">
      <div class="hd">
        <h2 class="title">首播影院</h2>
        <!-- 分页组件 -->
        <page-small></page-small>
      </div>
      <div class="hd">
        <div class="figure_md">
          <div class="figure_default">
            <!-- 影片封面开始 -->
            <div
              class="figure_item figure_video"
              v-for="(item,key) in 16"
              :key="key"
              @mouseout="handleVideoMouseout(key)"
              @mouseover="handleVideoMouseenter(key)"
            >
              <router-link :to="'/detail/'" class="figure_a">
                <img src="../../assets/images/220.jpeg" alt class="figure_img">
                <div class="figure_caption">01:55:11</div>
                <div class="figure_score">7.0</div>
                <img src="../../assets/images/mark_1.png" alt class="mark">
              </router-link>
              <div class="figure_detail">
                <router-link :to="'/detail/'" class="figure_title">我的英雄学院·终极预告</router-link>
                <div class="figure_desc">师徒联手对敌让人泪目</div>
              </div>
              <el-card class="box-card" :body-style="{ padding: '0px' }">
                <div class="card_video">
                  <router-link :to="'/detail/'" class="card_video_outlink">
                    <div class="card_a_video">
                      <video
                        width="100%"
                        height="100%"
                        muted
                        preload
                        src="https://mat1.gtimg.com/v/fayemeng/aquaman.mp4"
                      ></video>
                    </div>
                  </router-link>
                  <div class="card_content">
                    <div class="card_video_title">
                      <router-link :to="'/detail/'" class="title">命之途</router-link>
                      <span class="type">2019</span>
                      <span class="type">武侠</span>
                      <span class="type">动作</span>
                    </div>
                    <div class="card_video_tags">
                      <span class="tag_title">主演：</span>
                      <span class="tag_txt">李雅男</span>
                      <span class="line">/</span>
                      <span class="tag_txt">王薇</span>
                      <span class="line">/</span>
                      <span class="tag_txt">王永强</span>
                    </div>
                    <div class="card_video_review">
                      <span class="review_name">简介：</span>
                      <span
                        class="review_txt"
                      >影片讲述了退隐江湖的杀手叶真因一次任务失手误杀了盲女简熙的父亲，他心中懊悔不已，为赎罪接近简熙并逐渐喜欢上这个单纯善良的女子，叶真决定重回江湖执行杀手任务筹钱为简熙治疗眼睛。但在接下来的任务中，叶真遭遇了暗算并被捕快狄贤追查。当狄贤了解了叶真行事的前因后果，对他和简熙产生了理解和同情。简熙阴差阳错知道了事情的真相，但却被暗杀目标武东元挟持用来引出叶真。叶真中计现身，并联合狄贤解救简熙。而经此一事，叶真和简熙又该何去何从？两人的命运又会走向什么结局？</span>
                    </div>
                    <div class="card_video_btn"></div>
                  </div>
                </div>
              </el-card>
            </div>
            <!-- 影片封面结束 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 楼层结束 -->
  </div>
</template>

<script>
import pageSmall from "../../components/common/page/page";
import defaultImg1 from "../../assets/images/11.jpeg";
import defaultImg2 from "../../assets/images/111.jpeg";
import defaultImg3 from "../../assets/images/1111.jpeg";
export default {
  data() {
    return {
      slider_list: [defaultImg1, defaultImg2, defaultImg3]
    };
  },
  methods: {
    handleVideoMouseenter(k) {
      document.querySelectorAll(".card_a_video video")[k].play();
    },
    handleVideoMouseout(k) {
      document.querySelectorAll(".card_a_video video")[k].pause();
    }
  },
  components: {
    pageSmall
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
      .fi:hover {
        box-shadow: 0 4px 8px rgba(40, 40, 40, 0.2);
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
    .box-card {
      position: absolute;
      width: 238px;
      height: 348px;
      box-sizing: border-box;
      top: -6.5px;
      left: -20px;
      opacity: 0;
      box-shadow: 0 28px 50px rgba(25, 24, 40, 0.35);
      transition: all 0.2s ease-in-out;
      .card_video {
        zoom: 1;
      }
      .card_video_outlink {
        height: 178.5px;
        position: relative;
        display: block;
        overflow: hidden;
        border-radius: 4px 4px 0 0;
      }
      .card_a_video {
        position: relative;
        display: block;
        font-weight: 500;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: #000;
      }
      .card_content {
        position: relative;
        min-height: 115px;
        padding: 15px 20px 40px;
        border-top: 0;
      }
      video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .card_video_title {
        display: block;
        color: #aaa;
        margin-right: -5px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: -25px;
        .title {
          margin-right: 15px;
          color: #202020;
          font-size: 18px;
          line-height: 30px;
          font-weight: 700;
        }
        .type {
          font-size: 12px;
          line-height: 30px;
          margin-right: 10px;
        }
      }
      .card_video_tags {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        line-height: 24px;
        color: #7a7a7a;
        .tag_title {
          color: #202020;
          margin-right: 3px;
        }
      }
      .card_video_review {
        max-height: 36px;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        word-break: normal;
        font-size: 12px;
        line-height: 18px;
        color: #7a7a7a;
        .review_name {
          margin-right: 3px;
          color: #202020;
        }
      }
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
