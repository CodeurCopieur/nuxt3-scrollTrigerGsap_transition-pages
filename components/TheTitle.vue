<script setup>
  const props = defineProps({
    text: String
  });
</script>

<template>
  <div class="default-title">
    <div class="default-title__wrap">
      welcome
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .default-title {
    height: 100vh;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>