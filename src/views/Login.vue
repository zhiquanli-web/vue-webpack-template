<template>
  <div class="login-container">
    <el-button @click="handleLogin" type="primary">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { tokenKey } from '@/common';
import { localCache } from '@/utils';
const router = useRouter();

const handleLogin = () => {
  localCache.setCatch(tokenKey, '123456');
  router.push('/');
};
</script>

<style lang="scss" scoped></style>
