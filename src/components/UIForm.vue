<template>
  <a-form
    :model="formState"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    :layout="layout"
  >
    <a-form-item v-for="item in items" :key="item.key" :label="item.label">
      <!-- input -->
      <a-input
        v-model:value="formState[item.key]"
        v-if="item.type === 'input'"
        :placeholder="item.placeholder"
      />
      <!-- select -->
      <a-select
        v-model:value="formState[item.key]"
        v-if="item.type === 'select'"
        :placeholder="item.placeholder"
        :options="item.options"
      >
      </a-select>
      <!-- redio -->
      <a-radio-group
        v-model:value="formState[item.key]"
        v-if="item.type === 'redio'"
      >
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
      <!-- checkbox -->
      <a-checkbox-group
        v-model:value="formState[item.key]"
        v-if="item.type === 'checkbox'"
      >
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
      <!-- switch -->
      <a-switch
        v-model:checked="formState[item.key]"
        v-if="item.type === 'switch'"
      />
      <!-- date -->
      <a-range-picker
        v-model:value="formState[item.key]"
        v-if="item.type === 'date'"
        :allowClear="item.allowClear"
        :disabled="item.disabled"
        :disabledTime="item.disabledTime"
        :mode="item.mode"
        :format="item.format"
        :ranges="ranges"
        :showTime="showTime"
        :defaultPickerValue="item.defaultPickerValue"
      />
    </a-form-item>
    <slot name="content" />
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  props: {
    labelCol: Object,
    wrapperCol: Object,
    layout: {
      type: String,
      default: () => {
        return "horizontal" | "vertical" | "inline";
      },
    },
    items: Array,
  },
  data() {
    return {
      formState: {},
    };
  },
  methods: {
    onSubmit() {
      this.$emit("change", this.formState);
    },
  },
};
</script>

<style lang="less" scoped>
.search {
}
.table {
}
</style>