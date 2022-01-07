<template>
  <div></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Rating from "./Rating.js";
import Text from "./Text.js";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import TestVue from "./TestVue.js";
import RawTool from "@editorjs/raw";
export default {
  name: "hl-survey",
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          this.editor.render(JSON.parse(JSON.stringify(val)));
        } else {
          this.editor.clear();
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.editor = new EditorJS({
      holder: this.$el,
      tools: {
        raw: RawTool,
        header: Header,
        rating: Rating,
        text: Text,
        radio: Radio,
        checkbox: Checkbox,
        test: TestVue,
      },
      data: JSON.parse(JSON.stringify(this.value)),
      //ata: this.value,
    });
  },
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    test() {},
    async save() {
      let data = await this.editor.save();

      this.$emit("input", data);
    },
  },
};
</script>