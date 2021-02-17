<template>
  <div class="content-container">
    <h1 class="title">{{ noteObj.title }}</h1>

    <div class="J_editor editor"></div>

    <mt-button class="click-btn" type="primary" @click="handleClick"
      >review</mt-button
    >

    <div class="custom-picker-container">
      <mt-button class="custom-picker-btn" @click="openPicker" size="small">{{
          pickerValue ? friendlyTime(pickerValue.getTime()) : "请选择review时间"
        }}</mt-button>
      <mt-button class="custom-confirm-btn" type="primary" @click="confirmPicker" size="small"
      >确定</mt-button
      >
    </div>

    <mt-datetime-picker
      ref="picker"
      type="datetime"
      :startDate="startDate"
      v-model="pickerValue"
    >
    </mt-datetime-picker>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import queryString from "query-string";
import { Toast } from "mint-ui";
import ajax from "../../utils/ajax.js";
import { Base64 } from "js-base64";

import Muya from "../../common/muya/lib/index.js";
import TablePicker from "../../common/muya/lib/ui/tablePicker";
import QuickInsert from "../../common/muya/lib/ui/quickInsert";
import CodePicker from "../../common/muya/lib/ui/codePicker";
import EmojiPicker from "../../common/muya/lib/ui/emojiPicker";
import ImagePathPicker from "../../common/muya/lib/ui/imagePicker";
import ImageToolbar from "../../common/muya/lib/ui/imageToolbar";
import FormatPicker from "../../common/muya/lib/ui/formatPicker";

import "../../common/muya/themes/default.css";

const encodeChangeArr = changeArr => {
  let temp = [];
  for (let i = 0; i < changeArr.length; i++) {
    let obj = {
      ...changeArr[i],
      content: Base64.encode(changeArr[i].content)
    };
    temp.push(obj);
  }
  return temp;
};

export default {
  data() {
    return {
      startDate: new Date(),
      current: "",
      editor: "",
      noteId: "",
      noteObj: {
        content: ""
      },
      pickerValue: ""
    };
  },
  methods: {
    async confirmPicker() {
      if (!this.pickerValue) {
        Toast("请先选择要复习的时间");
        return
      }
      if (this.current && this.current !== this.noteObj.content) {
        // 先调用接口保存修改
        await this.saveChange();
      }
      // 再提交复习
      let reviewOk = await this.sumitReview({
        note_id: this.noteId,
        nextReviewTime: Math.round(this.pickerValue.getTime() / 1000)
      });

      if (reviewOk) {
        setTimeout(() => {
          window.location.href = "/buwang_h5/index.html";
        }, 1000);
      }
    },
    friendlyTime(timeStamp) {
      if (String(timeStamp).length === 13) {
        timeStamp = Math.floor(Number(timeStamp) / 1000);
      } else {
        timeStamp = Number(timeStamp);
      }
      // 确定好具体时间
      let year = String(new Date(timeStamp * 1000).getFullYear());
      let hour = String(new Date(timeStamp * 1000).getHours());
      let hourText = hour.length === 1 ? `0${hour}` : `${hour}`;
      let min = String(new Date(timeStamp * 1000).getMinutes());
      let minText = min.length === 1 ? `0${min}` : `${min}`;
      let month = new Date(timeStamp * 1000).getMonth() + 1;
      let day = String(new Date(timeStamp * 1000).getDate());
      let str = `${year}年 ${month}月${day}日 ${hourText}:${minText}`;
      return str;
    },
    openPicker() {
      this.$refs.picker.open();
    },
    init() {
      const ele = document.querySelector(".J_editor");
      let config = {
        autoPairBracket: true,
        autoPairMarkdownSyntax: true,
        autoPairQuote: true,
        bulletListMarker: "",
        focusMode: false,
        markdown: this.noteObj.content || "",
        preferLooseListItem: true,
        tabSize: 4,
        theme: "",
        hideQuickInsertHint: false
      };
      // use muya UI plugins
      Muya.use(TablePicker);
      Muya.use(QuickInsert);
      Muya.use(CodePicker);
      Muya.use(EmojiPicker);
      Muya.use(ImageToolbar);
      Muya.use(ImagePathPicker);
      Muya.use(FormatPicker);

      this.editor = new Muya(ele, config);

      // 监听到内容的改变
      this.editor.on("change", changes => {
        this.current = changes.markdown;
      });
      //
      // this.editor.on('selectionChange', changes => {
      //   const { y } = changes.cursorCoords
      //   if (this.typewriter) {
      //     animatedScrollTo(container, container.scrollTop + y - STANDAR_Y, 100)
      //   }
      //
      //   this.selectionChange = changes
      //   this.$store.dispatch('SELECTION_CHANGE', changes)
      // })
      //
      // this.editor.on('selectionFormats', formats => {
      //   this.$store.dispatch('SELECTION_FORMATS', formats)
      // })
      //
      // this.editor.on('contextmenu', (event, selectionChanges) => {
      //   showContextMenu(event, selectionChanges)
      // })
    },

    async handleClick() {
      if (this.current && this.current !== this.noteObj.content) {
        // 先调用接口保存修改
        await this.saveChange();
      }
      // 再提交复习
      let reviewOk = await this.sumitReview({
        note_id: this.noteId
      });

      if (reviewOk) {
        setTimeout(() => {
          window.location.href = "/buwang_h5/index.html";
        }, 1000);
      }
    },
    async saveChange() {
      let item = {
        note_id: this.noteObj.note_id,
        title: this.noteObj.title,
        content: this.current
      };
      let params = {
        change_arr: encodeChangeArr([item])
      };
      let { data: result } = await ajax("post", "change_arr", params);
      if (!result || !result.success) {
        // 如果更新失败
        Toast(result.message);
        return;
      } else {
        Toast("内容更新成功");
      }
    },
    async sumitReview(params) {
      let { data: result } = await ajax("POST", "review_this", params);

      if (!result || !result.success) {
        Toast("网络错误，请稍后再试");
        return false;
      }
      Toast("恭喜棒棒哒你~又复习了一个笔记");
      return true;
    },
    async getContent(noteId) {
      let { data: result } = await ajax("POST", "get_content", {
        note_id: noteId
      });

      if (!result || !result.success) {
        Toast("网络错误，请稍后再试");
        return;
      }
      let noteObj = result.data.content;
      noteObj.content = Base64.decode(noteObj.content);
      this.noteObj = noteObj;
    }
  },
  async created() {
    const params = queryString.parse(window.location.search);
    if (!params || !params.note_id) {
      Toast("note_id没有找到噢~");
      return;
    }
    this.noteId = Number(params.note_id);
    await this.getContent(this.noteId);
    this.init();
  }
};
</script>

<style lang="less">
@import "~!/common/less/index.less";

.content-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  padding-bottom: 200px;
  .title {
    padding-left: 22px;
    padding-top: 22px;
    font-size: 18px;
  }
  .click-btn {
    margin: 0 auto;
    display: block;
    margin-bottom: 30px;
  }
  .custom-picker-container {
    display: flex;
    align-items: center;
    .custom-picker-btn {
      margin-left: 20px;
    }
    .custom-confirm-btn {
      margin-left: 20px;
    }
  }
}
</style>

<style>
#ag-editor-id {
  min-width: 100px !important;
  padding: 20px 10px 100px 10px !important;
}
</style>
