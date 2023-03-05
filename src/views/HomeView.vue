<template>
  <div class="home-container">
    <el-button type="primary">主要按钮</el-button>
    <el-icon><icon-ep-search /></el-icon>
    <icon-sy-logo style="width: 18px; height: 18px" />
    <div>用户名: {{ user.userInfo.username }}</div>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from '@/hooks';
import { useStore } from '@/store';
const { success } = useMessage();
success('这是一条成功的消息');
const { user } = useStore();
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
