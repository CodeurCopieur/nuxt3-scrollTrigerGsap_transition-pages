<script setup>
  definePageMeta(transition);
</script>
<template>
  <div :class="general.pageBg">
    <NuxtLayout 
    name="custom"
    title="Home"
    :page-name="$route.name"></NuxtLayout>
  </div>
</template>
