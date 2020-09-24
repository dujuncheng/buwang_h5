<template>
  <div class="rediv-list-container">
    <div class="tips">
      <template v-if="waitNum > 0">
        待复习<span class="big-num">{{ waitNum }} </span> 篇, 已复习<span
          class="big-num"
          >{{ doneNum }}</span
        >篇
      </template>
      <template v-if="waitNum === 0">
        恭喜你，笔记全部都复习完了
      </template>
    </div>

    <div class="message-container">
      <div ref="mescroll" class="mescroll">
        <div
            class="item"
            v-for="(item, index) in reviewList"
            :key="index"
            @click="goContent(item.note_id)"
        >
          <div class="title">
            {{ item.title }}
          </div>
          <div class="desc-container">
            <div class="time-container">
              <img
                  class="time-img"
                  src="http://h0.hucdn.com/open201926/e777352fdc80ca6d_200x200.png"
              />
              <div class="time-text">{{ item.contentLength }} 字</div>
            </div>
            <div class="number-container">
              <img
                  class="number-img"
                  src="http://h0.hucdn.com/open201926/d169287f2feaae83_200x200.png"
              />
              <div class="number-text">{{ item.review_num }} 次</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="circle" v-if="item.needReview"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import ajax from "../../utils/ajax.js";
import { Base64 } from "js-base64";
import { REVIEW_PAGE_SIZE } from "../../config/const.js";
import EventBus from "../../utils/eventBus.js";
const MeScroll = require('mescroll.js');

export default {
  data() {
    return {
      reviewList: [],
      page: 1,
      hasMore: true,
      waitNum: 0,
      doneNum: 0,
      pulling: false,
    };
  },
  onShow() {
    this.refresh();
  },
  methods: {
    onReachBottom() {
      if (this.hasMore) {
        this.page = this.page + 1;
        this.getReviewList(this.page, REVIEW_PAGE_SIZE);
      }
    },
    refresh() {
      this.page = 1;
      this.reviewList = [];
      this.hasMore = true;
      this.getReviewList(this.page, REVIEW_PAGE_SIZE);
    },
    goContent(noteId) {
      if (noteId) {
        window.location.href = `/buwang_h5/content-page.html?note_id=${noteId}`;
      }
    },
    getReviewList(page, pageSize) {
      ajax("POST", "get_review_list", {
        page,
        page_size: pageSize,
        need_page: true
      })
        .then(({data: result}) => {
          if (!result || !result.review_list || !result.success) {
            Toast('网络错误，请稍后再试~')
            return;
          }
          let newArr = this.filterReviewList(result.review_list);

          if (newArr.length < REVIEW_PAGE_SIZE) {
            this.hasMore = false;
          }

          this.reviewList = this.reviewList.concat(newArr);
          console.log(this.reviewList)
          this.doneNum = result.done_num;
          this.waitNum = result.wait_num;
        })
        .catch(e => {
          console.log(e);
        });
    },
    /**
     * 过滤一下 result.review_list 数组
     * @param reviewList
     * @returns {*}
     */
    filterReviewList(reviewList) {
      for (let i = 0; i < reviewList.length; i++) {
        reviewList[i].content = Base64.decode(reviewList[i].content);
        reviewList[i].contentLength = reviewList[i].content.length;
        reviewList[i].needReview = this.checkNeedReview(
          reviewList[i].notify_time
        );
      }
      return reviewList;
    },
    checkNeedReview(num) {
      let time = Number(num) * 1000;
      let now = new Date().getTime();

      if (time < now) {
        return true;
      } else {
        return false;
      }
    },
    // 监听滚动, 判断是否需要 ShowToBottomBtn
    // pc 端是监听 svelte 组件的滚动，移动端是监听 mescroll
    onScroll(mescroll) {
      const bottomDis = mescroll.getToBottom()
      // 如果滚动到最底部，则已读所有消息
      if (bottomDis < 100) {
        this.onReachBottom()
      }
    },
  },
  mounted() {
    this.getReviewList(1, REVIEW_PAGE_SIZE);

    setTimeout(() => {
      this.mescroll = new MeScroll(this.$refs.mescroll, {
        up: {
          use: true,
          isBounce: false,
          onScroll: mescroll => {
            this.onScroll(mescroll)
          }
        },
        down: {
          use: true,
          auto: false,
          offset: 20,
          outOffsetRate: 0.1,
          bottomOffset: 20,
          hardwareClass: 'mescroll-hardware',
          callback: mescroll => {
            if (this.pulling) return mescroll.endSuccess()
            this.pulling = true
            this.refresh()
            this.pulling = false
            mescroll.endSuccess()
          }
        },
      });
    }, 1000);
  }
};
</script>

<style lang="less">
@import '~!/common/less/index.less';

.message-container {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  transition: height 0.2s;
  #message-list {
    width: 100%;
    height: 100%;
  }
}

.rediv-list-container {
  padding-top: 40/@base;
}
.tips {
  width: 100vw;
  height: 40/@base;
  font-family: PingFang-SC-Regular;
  font-size: 14/@base;
  color: #99521f;
  letter-spacing: 0;
  line-height: 32/@base;
  background: #fff2e6;
  display: flex;
  align-items: center;
  padding-left: 24/@base;
  padding-right: 24/@base;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.big-num {
  font-size: 18/@base;
  color: #ff1940;
  margin-left: 6/@base;
  margin-right: 6/@base;
}
.item {
  padding: 22/@base 26/@base;
  position: relative;
}

.title {
  font-family: PingFangSC-Light;
  font-size: 19/@base;
  color: #000000;
  letter-spacing: 0;
  margin-bottom: 11/@base;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 335/@base;
}

.time-img {
  width: 20/@base;
  height: 20/@base;
  display: inline-block;
  margin-right: 7/@base;
}

.number-img {
  width: 20/@base;
  height: 20/@base;
  display: inline-block;
  margin-right: 7/@base;
}

.desc-container {
  display: flex;
}

.number-container {
  flex: 1;
  font-family: PingFangSC-Light;
  font-size: 16/@base;
  color: #000000;
  letter-spacing: 0;
  display: flex;
  align-items: center;
}

.time-container {
  flex: 1;
  font-family: PingFangSC-Light;
  font-size: 16/@base;
  color: #000000;
  letter-spacing: 0;
  display: flex;
  align-items: center;
}

.line {
  width: 350/@base;
  height: 1/@base;
  background-color: #e8e8e8;
  position: absolute;
  bottom: 0;
  right: 0;
}

.circle {
  position: absolute;
  right: 30/@base;
  top: 126/@base;
  width: 10/@base;
  height: 10/@base;
  background-color: red;
  border-radius: 50%;
}
</style>

<style lang="less">
@import '~!/common/less/index.less';
.mescroll {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.mescroll-hardware {
  -webkit-transform: translateZ(0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

.mescroll-downwarp {
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  text-align: center;
}

.mescroll-downwarp-reset {
  -webkit-transition: height 300ms;
  transition: height 300ms;
}

.mescroll-downwarp .downwarp-content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 10 / @base;
  padding: 10 / @base 0;
}

.mescroll-upwarp {
  text-align: center;
  visibility: hidden;
}

.mescroll-downwarp .downwarp-tip,
.mescroll-upwarp .upwarp-tip,
.mescroll-upwarp .upwarp-nodata {
  display: inline-block;
  font-size: 12 / @base;
  color: gray;
  vertical-align: middle;
}

.mescroll-downwarp .downwarp-tip,
.mescroll-upwarp .upwarp-tip {
  margin-left: 8 / @base;
}

.mescroll-downwarp .downwarp-progress,
.mescroll-upwarp .upwarp-progress {
  display: inline-block;
  width: 16 / @base;
  height: 16 / @base;
  border-radius: 50%;
  border: 1 / @base solid gray;
  border-bottom-color: transparent;
  vertical-align: middle;
}

.mescroll-rotate {
  -webkit-animation: mescrollRotate 0.6s linear infinite;
  animation: mescrollRotate 0.6s linear infinite;
}

@-webkit-keyframes mescrollRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes mescrollRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.mescroll-empty {
  width: 100%;
  padding-top: 20 / @base;
  text-align: center;
}

.mescroll-empty .empty-icon {
  width: 45%;
}

.mescroll-empty .empty-tip {
  margin-top: 6 / @base;
  font-size: 14 / @base;
  color: gray;
}

.mescroll-empty .empty-btn {
  max-width: 50%;
  margin: 20 / @base auto;
  padding: 10 / @base;
  border: 1 / @base solid #65aadd;
  border-radius: 6 / @base;
  background-color: white;
  color: #65aadd;
}

.mescroll-empty .empty-btn:active {
  opacity: 0.75;
}

.mescroll-totop {
  z-index: 9990;
  position: fixed;
  right: 10 / @base;
  bottom: 30 / @base;
  width: 36 / @base;
  height: 36 / @base;
  border-radius: 50%;
  opacity: 0;
}

.mescroll-lazy-in,
.mescroll-fade-in {
  -webkit-animation: mescrollFadeIn 0.5s linear forwards;
  animation: mescrollFadeIn 0.5s linear forwards;
}

@-webkit-keyframes mescrollFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes mescrollFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.mescroll-fade-out {
  pointer-events: none;
  -webkit-animation: mescrollFadeOut 0.5s linear forwards;
  animation: mescrollFadeOut 0.5s linear forwards;
}

@-webkit-keyframes mescrollFadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes mescrollFadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.mescroll-bar::-webkit-scrollbar-track {
  background-color: transparent;
}

.mescroll-bar::-webkit-scrollbar {
  width: 6 / @base;
}

.mescroll-bar::-webkit-scrollbar-thumb {
  border-radius: 6 / @base;
  background-color: #ccc;
}

.mescroll-bar::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>
