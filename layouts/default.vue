<script setup>
  onMounted(()=> {
    useSmoothScroll()
  });
</script>
<template>
  <div id="viewport">
    <ThePreLoader/>
    <slot />
  </div>
</template>