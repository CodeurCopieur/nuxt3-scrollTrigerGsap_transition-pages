<script setup>
  const percentage = ref(0);
</script>

<template>
  <div class="preloader">
    <div class="preloader-precent h1">
      {{ percentage }}%
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .preloader {
    position: fixed;
    inset: 0;
    background-color: $white;
    z-index: $z-preloader;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>