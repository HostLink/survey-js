<template>
  <div id="app">
    Test

    <hl-survey ref="survey" v-model="data"></hl-survey>
    <button @click="save">Save</button>
    <button @click="load">load</button>
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
            type: "input",
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

    load() {
      this.data = {
        time: 1641446283462,
        blocks: [
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
            type: "input",
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
