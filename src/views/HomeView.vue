<template>
  <div class="home-container">
    <icon-sy-logo style="width: 18px; height: 18px" />
    <br />
    <div>用户名: {{ user.userInfo.username }}</div>
    <br />
    <span>{{ $filters.dateFormat(Date.now()) }}</span>
    <br />
    <input type="text" v-focus placeholder="指令测试" />
    <br />
    <div class="css-var" ref="el">
      <button>测试主题色</button>
    </div>
    <br />
    <button @click="switchColor">切换主题</button>
  </div>
</template>

<script setup lang="ts">
import { useSwitchTheme } from '@/hooks';
import { useStore } from '@/store';

const { user } = useStore();
const el = ref(null);
const { switchColor } = useSwitchTheme(el, { '--el-color-primary': '#f60' });
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

.css-var {
  --el-color-primary: #409eff;
  button {
    background-color: var(--el-color-primary);
  }
}
</style>
