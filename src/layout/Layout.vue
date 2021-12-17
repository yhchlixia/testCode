<template>
  <div class="layout">
    <page-header></page-header>
    <div class="content">
      <div class="side">
        <a-menu
          id="menu"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
        >
          <a-menu-item key="Index" @click="changeMenu('/index')"
            >Index</a-menu-item
          >
          <a-sub-menu v-for="menu in menus" :key="menu.name">
            <template #icon>
              <MailOutlined />
            </template>
            <template #title>{{ menu.name }}</template>
            <a-menu-item
              v-for="children in menu.children"
              :key="children.name"
              @click="changeMenu(children.path)"
              >{{ children.name }}</a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="seasion">
        <router-view></router-view>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import PageFooter from "../components/PageFooter.vue";
import RouterList from "../router/router";
import { MailOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      menus: [],
      userInfo: {},
      currentMenu: 0,
      openKeys: [],
      selectedKeys: [],
    };
  },
  components: {
    PageHeader,
    PageFooter,
    MailOutlined,
  },
  methods: {
    changeMenu(value) {
      this.$router.push({
        path: value,
      });
    },
  },
  created() {
    this.userInfo = window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo"))
      : {};
    this.userInfo.menus &&
      RouterList.forEach((router) => {
        if (this.userInfo.menus.includes(router.roles)) {
          this.menus.push(router);
          this.openKeys.push(router.name);
        }
      });
    this.selectedKeys = [this.$route.name];
  },
  watch: {
    "$store.state.currentPage": function (val) {
      this.selectedKeys = [val];
    },
  },
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    display: flex;
    .side {
      width: 300px;
      height: 100%;
      /deep/ .ant-menu-root {
        height: 100%;
        padding-top: 16px;
      }
    }
    .seasion {
      padding: 20px;
      flex: 1;
    }
  }
}
</style>