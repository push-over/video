<template>
  <!-- 分页开始 -->
  <div class="page_small">
    <button class="btn_prev">
      <svg class="svg_icon svg_icon_prev disabled" viewBox="0 0 6 10" width="6" height="10">
        <path
          d="M1.4 4.7L5 1M1.3 5.3L5 9"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
    <span class="page_num">1/4</span>
    <button class="btn_next">
      <svg class="svg_icon svg_icon_next" viewBox="0 0 6 10" width="6" height="10">
        <path
          d="M4.6 4.7L1 1M4.7 5.3L1 9"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  </div>
  <!-- 分页结束 -->
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.page_small {
  position: absolute;
  top: 13px;
  right: -10px;
  font-size: 0;
  background-color: #fff;
}
.disabled {
  color: #ccc;
  pointer-events: none;
}
.btn_prev,
.btn_next {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  text-align: center;
  vertical-align: top;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
.page_num {
  display: inline-block;
  min-width: 20px;
  margin: 0 15px;
  color: #666;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 30px;
  text-align: center;
  vertical-align: top;
}
</style>
