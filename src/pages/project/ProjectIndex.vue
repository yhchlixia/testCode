<template>
  <div class="search">
    <UI-Form :layout="'inline'" :items="items" @change="formChange"></UI-Form>
    <div @click="tobaidu">dakai</div>
    <div v-html="message"></div>
    <a href="" target=""></a>
  </div>
  <div class="table">table</div>
  <div>
    <a target="_blank" href="http://www.baidu.com">新页面</a>
  </div>
</template>

<script>
import UIForm from "../../components/UIForm.vue";
export default {
  components: { UIForm },
  data() {
    return {
      form: {},
      items: [
        {
          key: "name",
          label: "Project Name",
          type: "input",
          placeholder: "Please enter Project Name",
        },
        {
          key: "creator",
          label: "Creator",
          type: "select",
          placeholder: "Please select Creator",
          options: [
            {
              label: "闫宏超",
              value: "yhch",
            },
            {
              label: "郭鹏",
              value: "guop",
            },
          ],
        },{
          key: "date",
          label: "Create Time",
          type: "date",
          placeholder: "Please select create time",
          allowClear: true
        }
      ],
      message: '你好啦啦啦啦<span style="font-weight: bold; font-style: italic;">And for a limited time -</span><a target="_blank" style="color: #0000ee; text-decoration: underline;" href="https://visit.discoveryloyalty.com/about-discovery/benefits/">here</a>'
    };
  },
  methods: {
    formChange(value) {
      this.form = value;
      console.log(this.form);
    },
    tobaidu() {
        window.open('https://www.baidu.com', '_self')
    }
  },
};
</script>

<style lang="less" scoped>
.search {
    /deep/ .ant-form {
        display: flex;
        .ant-form-item {
            flex: 1;
            max-width: 25%;
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
        }
    }
}
.table {
}
</style>