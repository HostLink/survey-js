<template>
  <div>
    <el-form>
      <el-form-item label="[Radio] Question">
        <el-input v-model="localData" />
      </el-form-item>
    </el-form>
    <el-table :data="localAnswer">
      <el-table-column width="55px">
        <template v-slot:header>
          <el-button
            size="mini"
            @click="localAnswer.push({ text: '' })"
            icon="el-icon-plus"
          ></el-button>
        </template>
        <template v-slot="scope">
          <el-button
            size="mini"
            icon="el-icon-minus"
            @click="localAnswer = localAnswer.filter((a) => a != scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
      <el-table-column v-slot="scope">
        <el-input v-model="scope.row.text"></el-input>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        text: "",
        answers: [],
      }),
    },
  },
  data() {
    return {
      localData: this.value.text || "",
      localAnswer: this.value.answers || [],
    };
  },
  watch: {
    localData() {
      this.$emit("input", {
        text: this.localData,
        answers: this.localAnswer,
      });
    },
    localAnswer() {
      this.$emit("input", {
        text: this.localData,
        answers: this.localAnswer,
      });
    },
  },
};
</script>