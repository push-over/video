<template>
  <div>
    <div class="head_placeholder"></div>
    <div class="head">
      <div class="head_inner">
        <!-- 分类标s -->
        <h1 class="site_logo">
          <a href="https://baidu.com" class="link_logo">电影天堂</a>
        </h1>
        <div class="head_menu">
          <a class="head_nav" href="精选">精选</a>
          <a class="head_nav" href="电视剧">电视剧</a>
          <a class="head_nav current" data-icon="../../assets/images/0.png" href="电影">
            <img src="../../assets/images/0.png" alt class="head_nav_icon">
            电影
          </a>
          <a class="head_nav" href="综艺">综艺</a>
          <a class="head_nav" href="动漫">动漫</a>
          <a class="head_nav" href="少儿">少儿</a>
          <a class="head_nav" href="纪录片">纪录片</a>
          <a class="head_nav" href="VIP会员">VIP会员</a>
          <a class="head_nav" href="音乐">音乐</a>
          <a class="head_nav" href="体育">体育</a>
          <a class="head_nav" href="全部">全部</a>
        </div>
        <!-- 搜索框 -->
        <div class="head_search">
          <div class="search_keywords">
            <input type="text" class="search_input" placeholder="海王" value="海王">
          </div>
          <button class="search_btn">
            <img class="search_icon" src="../../assets/images/search.png" alt>
            <span>全网搜</span>
          </button>
          <a href class="search_hot">
            <img class="hot_icon" src="../../assets/images/hot.png" alt>
            <span class="hot_span">热搜榜</span>
          </a>
        </div>
        <!-- 快捷中心 -->
        <div class="head_quick">
          <div class="quick_item">
            <a href class="quick_link">
              <img class="quick_icon" src="../../assets/images/vip.png" alt>
            </a>
          </div>
          <div class="quick_item">
            <a href class="quick_link">
              <img class="quick_icon" src="../../assets/images/history.png" alt>
            </a>
          </div>
          <div class="quick_item">
            <a href class="quick_link">
              <img class="quick_icon" src="../../assets/images/upload.png" alt>
            </a>
          </div>
          <div class="quick_item">
            <a href class="quick_link">
              <img class="quick_icon" src="../../assets/images/client.png" alt>
            </a>
          </div>
          <div class="quick_item quick_user">
            <a href class="quick_link">
              <img class="quick_icon quick_user_avatar" src="../../assets/images/g.jpeg" alt>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="head_subnav">
      <div class="subnav_inner">
        <a href class="nav_link current">电影精选</a>
        <a href class="nav_link">院线大片</a>
        <a href class="nav_link">网络电影</a>
        <a href class="nav_link">内地</a>
        <a href class="nav_link">中国香港</a>
        <a href class="nav_link">美国</a>
        <a href class="nav_link">动作</a>
        <a href class="nav_link">喜剧</a>
        <a href class="nav_link">科幻</a>
        <a href class="nav_link">犯罪</a>
        <a href class="nav_link">爱情</a>
        <a href class="nav_link">独播</a>
        <a href class="nav_link">电影片库</a>
      </div>
    </div>
    <div class="head_subnav_placeholder"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head_placeholder {
  // position: fixed;
  display: block;
  height: 68px;
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  min-width: 1000px;
  height: 68px;
  color: #666;
  z-index: 101;
  .head_inner {
    width: 1710px;
    height: 68px;
    margin: 0 auto;
    .site_logo,
    .link_logo {
      display: block;
      width: 135px;
      height: 36px;
      background: url("../../assets/images/sprite_head_logo.svg") 0 -36px no-repeat;
      text-indent: -300px;
      font-size: 1rem;
      text-decoration: none;
      color: #111;
    }
    .site_logo {
      position: relative;
      margin-top: 16px;
      float: left;
      overflow: hidden;
    }
    .head_menu,
    .head_nav {
      display: inline-block;
      position: relative;
      margin-right: 20px;
      font-size: 15px;
      vertical-align: top;
      text-decoration: none;
      letter-spacing: normal;
      color: #111;
    }
    .head_menu {
      position: relative;
      margin: 22px 0 0 30px;
      float: left;
      line-height: 26px;
      .head_nav:hover {
        color: #ff5c38;
      }
      .current {
        padding-left: 24px;
        color: #ff5c38;
        font-size: 18px;
        font-weight: 700;
      }
      .head_nav_icon {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 3px;
        left: 0;
      }
    }
    .head_search {
      position: absolute;
      top: 14px;
      right: 375px;
      width: 428px;
      height: 38px;
      border: 1px solid #ff5c38;
      border-radius: 20px;
      .search_keywords {
        position: relative;
        height: 100%;
        margin: 0 164px 0 20px;
      }
      .search_input {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 0;
        border: 0;
        outline: 0;
        color: #999;
        font-size: 15px;
        line-height: 40px;
      }
      .search_btn {
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        width: 90px;
        height: 40px;
        padding-right: 6px;
        border: none;
        border-radius: 0 20px 20px 0;
        outline: 0;
        background-color: #ff5c38;
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        cursor: pointer;
        .search_icon {
          width: 18px;
          height: 18px;
          margin-right: 5px;
          vertical-align: -4px;
        }
      }
      .search_hot {
        position: absolute;
        top: 10px;
        right: 106px;
        padding-left: 16px;
        color: #ff5c38;
        font-size: 13px;
        text-decoration: none;
        .hot_icon {
          display: block;
          position: absolute;
          top: 1px;
          left: 0;
          width: 12px;
          height: 15px;
        }
        .hot_span {
          position: relative;
          top: 2px;
        }
      }
    }
    .head_quick {
      position: absolute;
      top: 19px;
      right: 40px;
      .quick_item {
        float: left;
        margin: 0 10px;
        .quick_link {
          display: block;
          position: relative;
          width: 36px;
          height: 26px;
          padding: 0;
          z-index: 11;
          text-decoration: none;
          cursor: pointer;
        }
        .quick_icon {
          display: block;
          width: 26px;
          height: 26px;
          margin: auto;
        }
        .quick_user_avatar {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #7f7f8c;
        }
      }
      .quick_user {
        .quick_link {
          height: 36px;
          margin-top: -5px;
        }
      }
    }
  }
}

.head_subnav {
  z-index: 100;
  position: fixed;
  top: 68px;
  left: 0;
  width: 100%;
  min-width: 1000px;
  height: 40px;
  background: #fff;
  background: rgba(255, 255, 255, 0.95);
  .subnav_inner {
    position: relative;
    width: 1545px;
    height: 40p;
    margin: 0 auto;
    padding-left: 165px;
    font-size: 0;
    letter-spacing: -3px;
    white-space: nowrap;
    .current {
      position: relative;
      color: #ff5c38;
      font-weight: 700;
      z-index: 11;
    }
    .current::after {
      position: absolute;
      right: 1em;
      bottom: 0;
      left: 1em;
      height: 3px;
      background: currentColor;
      content: "";
    }
    .nav_link {
      text-decoration: none;
      display: inline-block;
      margin: 0 30px 0 0;
      // color: #111;
      padding: 0;
      font-size: 14px;
      letter-spacing: normal;
      line-height: 40px;
      vertical-align: top;
    }
    .nav_link:hover {
      color: #ff5c38;
    }
  }
}

.head_subnav_placeholder {
  display: block;
  width: 100%;
  height: 40px;
}
</style>
