<template>
  <div class="content-container">
    <h1>{{ noteObj.title }}</h1>

    <button type="primary" @click="sumitReview">确认已经复习</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import ajax from "../../utils/ajax.js";
import { Base64 } from "js-base64";
import EventBus from "../../utils/eventBus.js";

export default {
  data() {
    return {
      noteId: "",
      noteObj: ""
    };
  },
  methods: {
    async sumitReview() {
      let result = await ajax("POST", "review_this", { note_id: this.noteId });

      if (!result || !result.success) {
        Toast("网络错误，请稍后再试")
        return;
      }

      this.bus.emit("refresh");
      Toast("恭喜棒棒哒你~又复习了一个笔记")
      setTimeout(() => {
        window.history.back()
      }, 1000)
    },
    async getContent(noteId) {
      let result = await ajax("POST", "get_content", { note_id: noteId });

      if (!result || !result.success) {
        Toast("网络错误，请稍后再试")
        return;
      }
      let noteObj = result.data.content;
      noteObj.content = Base64.decode(noteObj.content);
      this.noteObj = noteObj;
    }
  },
  onLoad(options) {
    if (!options || !options.note_id) {
      Toast("note_id没有找到噢~")
      return;
    }
    this.noteId = Number(options.note_id);

    this.bus = new EventBus();
    this.getContent(this.noteId);
  }
};
</script>

<style>
.content-container {
  padding: 22px 26px;
  position: relative;
}
</style>
