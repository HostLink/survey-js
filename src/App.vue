<template>
  <div id="app">
    Test

    <hl-survey ref="survey" v-model="data"></hl-survey>
    <button @click="save">Save</button>
    <button @click="load">Load</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
import HLSurvey from "./survey.vue";
export default {
  name: "App",
  components: {
    "hl-survey": HLSurvey,
  },
  created() {},
  data() {
    return {
      data: {
        time: 1641446283462,
        blocks: [
          {
            id: "radio1",
            type: "radio",
            data: {
              value: "hello",
              answers: ["test1"],
            },
          },
          {
            id: "wl5ygLA7ZD",
            type: "paragraph",
            data: {
              text: "a",
            },
          },
          {
            id: "S11e4iOlzL",
            type: "paragraph",
            data: {
              text: "def=",
            },
          },
          {
            id: "a1",
            type: "text",
            data: {
              value: "hello world",
            },
          },
        ],
        version: "2.22.2",
      },
    };
  },
  methods: {
    async save() {
      await this.$refs.survey.save();
      console.log(this.data);
    },
    clear() {
      this.data = null;
    },

    load() {
      this.data = {
        time: 1641446283462,
        blocks: [
          {
            id: "radio1",
            type: "radio",
            data: {
              value: "hello",
              answers: ["test1"],
            },
          },
          {
            id: "wl5ygLA7ZD",
            type: "paragraph",
            data: {
              text: "aaaa",
            },
          },
          {
            id: "S11e4iOlzL",
            type: "paragraph",
            data: {
              text: "def=",
            },
          },
          {
            id: "a1",
            type: "text",
            data: {
              value: "hello world2",
            },
          },
        ],
        version: "2.22.2",
      };
    },
  },
};
</script>

