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
import HLSurvey from "./Survey.vue";
export default {
  name: "App",
  components: {
    "hl-survey": HLSurvey,
  },
  created() {},
  data() {
    return {
      data: null,
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
              answers: [{ value: "test1" }],
            },
          },
        ],
        version: "2.22.2",
      };
    },
  },
};
</script>

