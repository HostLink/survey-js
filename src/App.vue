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
import HLSurvey from "./Survey";
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
      this.c_data = Object.assign({}, this.data);
    },
    clear() {
      this.data = null;
    },
    load() {
      this.data = Object.assign({}, this.c_data);
    },
  },
};
</script>

