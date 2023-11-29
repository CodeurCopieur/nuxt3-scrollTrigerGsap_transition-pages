<script setup>
  const props = defineProps({
    title: String,
    pageName: String
  });
</script>
<template>
  <div :class="`page ${props.pageName}`">

    <TheHeader/>

    <div class="page-wrap _container">
      <TheTitle :text="props.title"/>
      <slot/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  ._container {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>