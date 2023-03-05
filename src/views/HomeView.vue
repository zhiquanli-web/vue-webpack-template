<template>
  <div class="home-container">
    <icon-sy-logo style="width: 18px; height: 18px" />
    <div>用户名: {{ user.userInfo.username }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
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
