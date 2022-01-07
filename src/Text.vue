<template>
  <div>
    <el-form>
      <el-form-item label="[Text] Question">
        <el-input v-model="localData" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      localData: this.value,
    };
  },
  watch: {
    localData() {
      this.$emit("input", this.localData);
    },
  },
};
</script>
