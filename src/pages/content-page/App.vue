<template>
  <div class="content-container">
    <h1 class="title">{{ noteObj.title }}</h1>

    <div class="J_editor editor"></div>

    <mt-button class="click-btn" type="primary" @click="handleClick">确认已经复习</mt-button>
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
      current: "",
      editor: "",
      noteId: "",
      noteObj: {
        content: ""
      }
    };
  },
  methods: {
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

      // the default theme is light write in the store
      // bus.$on('file-loaded', this.setMarkdownToEditor)
      // bus.$on('undo', this.handleUndo)
      // bus.$on('save', this.handleSave)
      // bus.$on('redo', this.handleRedo)
      // bus.$on('selectAll', this.handleSelectAll)
      // bus.$on('paragraph', this.handleEditParagraph)
      // bus.$on('format', this.handleInlineFormat)
      // bus.$on('searchValue', this.handleSearch)
      // bus.$on('replaceValue', this.handReplace)
      // bus.$on('find-action', this.handleFindAction)
      // bus.$on('insert-image', this.handleSelect)
      // bus.$on('image-uploaded', this.handleUploadedImage)
      // bus.$on('file-changed', this.handleMarkdownChange)
      // bus.$on('editor-blur', this.blurEditor)
      // bus.$on('editor-focus', this.focusEditor)
      // bus.$on('image-auto-path', this.handleImagePath)
      // bus.$on('copyAsMarkdown', this.handleCopyPaste)
      // bus.$on('copyAsHtml', this.handleCopyPaste)
      // bus.$on('pasteAsPlainText', this.handleCopyPaste)
      // bus.$on('duplicate', this.handleParagraph)
      // bus.$on('createParagraph', this.handleParagraph)
      // bus.$on('deleteParagraph', this.handleParagraph)
      // bus.$on('insertParagraph', this.handleInsertParagraph)
      // bus.$on('scroll-to-header', this.scrollToHeader)

      // this.editor.on('insert-image', type => {
      //   if (type === 'absolute' || type === 'relative') {
      //     this.$store.dispatch('ASK_FOR_INSERT_IMAGE', type)
      //   } else if (type === 'upload') {
      //     bus.$emit('upload-image')
      //   }
      // })
      //
      // this.editor.on('image-path-autocomplement', src => {
      //   this.$store.dispatch('ASK_FOR_IMAGE_AUTO_PATH', src)
      // })
      //
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
      let reviewOk = await this.sumitReview();

      if (reviewOk) {
        setTimeout(() => {
          window.location.href = '/buwang_h5/index.html'
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
    async sumitReview() {
      let {data: result} = await ajax("POST", "review_this", { note_id: this.noteId });

      if (!result || !result.success) {
        Toast("网络错误，请稍后再试");
        return false;
      }
      Toast("恭喜棒棒哒你~又复习了一个笔记");
      return true
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
  .title {
    padding-left: 22 / @base;
    padding-top: 22 / @base;
    font-size: 13 / @base;
  }
  .click-btn {
    margin: 0 auto;
    display: block;
  }
}
</style>

<style>
#ag-editor-id {
  min-width: 100px !important;
  padding: 20px 10px 100px 10px !important;
}

</style>
