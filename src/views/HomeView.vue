<template>
  <div class="home-container">
    <el-button type="primary">主要按钮</el-button>
    <br />
    <el-icon><icon-ep-search /></el-icon>
    <icon-sy-logo style="width: 18px; height: 18px" />
    <br />
    <div>用户名: {{ user.userInfo.username }}</div>
    <br />
    <div ref="el">
      <el-button type="primary">1111</el-button>
    </div>
    <br />
    <el-button type="success" @click="switchColor">切换主题</el-button>
    <br />
    <el-button type="primary" @click="handleLogout">登出</el-button>
    <span>{{ $filters.dateFormat(Date.now()) }}</span>
    <br />
    <input type="text" v-focus placeholder="指令测试" />
  </div>
</template>

<script setup lang="ts">
import { useMessage, useSwitchTheme } from '@/hooks';
import { useStore } from '@/store';
import { localCache } from '@/utils';
const { success } = useMessage();
success('这是一条成功的消息');
const { user } = useStore();

const el = ref(null);
const { switchColor } = useSwitchTheme(el, { '--el-color-primary': '#f60' });

const handleLogout = () => {
  localCache.clearCache();
  window.location.reload();
};
</script>

<style lang="scss" scoped>
.home-container {
  @include fvc;
  height: 100%;
  font: {
    size: 20px;
    weight: 600;
  }
}
</style>
