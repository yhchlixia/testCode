<template>
  <div class="user_setting">
    <div class="user_info">
      <div class="img">
        <img :src="userInfo.portrait || images.logo" alt="" />
      </div>
      <div class="other_info">
        <div class="info">
          <div class="username">{{ userInfo.username }}</div>
          <div class="username">{{ userInfo.email }}</div>
          <div class="username">
            <span>{{ userInfo.enName }}</span>
            <span class="constant">加入于</span>
            <span>{{ $moment(userInfo.joinTime).format("MMM D, YYYY") }}</span>
          </div>
          <div class="username">
            {{ userInfo.userType }}
          </div>
        </div>
        <div class="edit">
          <a-button
            class="edit_button"
            type="primary"
            size="large"
            @click="editUserInfo"
          >
            <template #icon><FormOutlined /></template>
            Edit
          </a-button>
        </div>
      </div>
    </div>
    <div class="project_info">
      <div class="cards first">
        <a-card title="Update">
          <template #extra><a href="#">more</a></template>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Processing">
          <template #extra><a href="#">more</a></template>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
      <div class="cards">
        <a-card title="Pending">
          <template #extra><a href="#">more</a></template>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Processed">
          <template #extra><a href="#">more</a></template>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
    </div>
  </div>
  <a-modal v-model:visible="visible" title="Edit" @ok="handleOk">
    <a-form :model="formData" layout="vertical" :rules="rules">
      <a-form-item label="Portrait">
        <div class="portrait">
          <div class="avatar">
            <a-image :src="formData.portrait || images.logo" alt="" />
          </div>
          <div class="upload">
            <a-upload
              name="avatar"
              class="avatar_uploader"
              :show-upload-list="false"
              :before-upload="beforeUpload"
            >
              <a-button> select image </a-button>
            </a-upload>
          </div>
        </div>
      </a-form-item>
      <a-form-item label="User ID">
        <a-input v-model:value="formData.userId" :disabled="true" />
      </a-form-item>
      <a-form-item label="User Name">
        <a-input v-model:value="formData.username" />
      </a-form-item>
      <a-form-item label="English Name">
        <a-input v-model:value="formData.enName" />
      </a-form-item>
      <a-form-item label="Email">
        <a-input v-model:value="formData.email" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import logo from "@/assets/logo.png";
import { FormOutlined } from "@ant-design/icons-vue";
import { editUser } from "@/service";

export default {
  data() {
    return {
      userInfo: {},
      images: {
        logo,
      },
      visible: false,
      formData: {},
      rules: {
        username: "",
      },
    };
  },
  components: { FormOutlined },
  created() {
    this.userInfo = window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo"))
      : {};
  },
  methods: {
    editUserInfo() {
      this.formData = { ...this.userInfo };
      this.visible = true;
    },
    beforeUpload(file) {
      console.log("upload image", file);
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        this.$message.warning("please select file type is image");
        return false;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          const Base64Val = event.target.result;
          this.formData.portrait = Base64Val;
        };
      } else {
        alert("对不起，您的浏览器暂不支持此功能！");
      }
      return false;
    },
    handleOk() {
      const params = {
        userId: this.formData.userId,
        username: this.formData.username,
        portrait: this.formData.portrait,
        enName: this.formData.enName,
        email: this.formData.email,
      };
      editUser(params).then((res) => {
        const { status, message } = res;
        if (status === 0) {
          this.visible = false;
          this.$message.success(message);
          return;
        }
        this.$message.error(message);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user_setting {
  height: 100%;
  display: flex;
  .user_info {
    width: 320px;
    box-shadow: 0px 0 10px #ddd;
    border-radius: 10px;
    padding: 20px;
    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin: 30px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .other_info {
      height: calc(100% - 160px);
      line-height: 50px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      .username {
        text-align: center;
        .constant {
          margin: 0 10px;
        }
      }
      .edit {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
    }
  }
  .user_info:hover {
    box-shadow: 0 0 10px #888;
  }
  .project_info {
    flex: 1;
    margin-left: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .cards {
        flex: 1;
      display: flex;
      /deep/ .ant-card {
        flex: 1;
      }
      /deep/ .ant-card:hover {
          box-shadow: 0 0 10px #888;
      }
      /deep/ .ant-card:first-child {
        margin-right: 20px;
      }
    }
    .first {
      margin-bottom: 20px;
    }
  }
}
.portrait {
  display: flex;
  align-items: center;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #eee;
    margin-right: 20px;
    /deep/ .ant-image {
      width: 100%;
      height: 100%;
      .ant-image-img {
        object-fit: cover;
        object-position: left top;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.edit_button {
  width: 100%;
}
</style>