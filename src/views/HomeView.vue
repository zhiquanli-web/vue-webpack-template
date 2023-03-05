<template>
  <icon-sy-logo style="width: 18px; height: 18px" />
  {{ user.userInfo.username }}
</template>

<script setup lang="ts">
import { useStore } from '@/store';
const { user } = useStore();
</script>

<style lang="scss" scoped></style>
