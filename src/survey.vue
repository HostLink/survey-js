<template>
  <div></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Rating from "./Rating";
import Input from "./Input.js";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import TestVue from "./TestVue.js";

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
        this.editor.clear();
        this.editor.render(val);
      },
      deep: true,
    },
  },
  mounted() {
    this.editor = new EditorJS({
      holder: this.$el,
      tools: {
        header: Header,
        rating: Rating,
        input: Input,
        radio: Radio,
        checkbox: Checkbox,
        test: TestVue,
      },
      data: this.value,
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
      console.log(data);
      this.$emit("input", data);
    },
  },
};
</script>