<script setup>
  definePageMeta(transition);

  watch(()=> [general.isTransitionFinish, general.isPreloaderVisible], ([tF, pV]) => {
    
    if(tF && !pV) {
      contentAnimation({type: 'image', element: '.page-content__photo'})
    }
    
  });
</script>
<template>
  <div :class="general.pageBg">
    <NuxtLayout 
    name="custom"
    title="Projets"
    :page-name="$route.name">

    <div class="page-content">
      <nuxt-link
        v-for="_, i in 10"
        :key="i"
        class="page-content__photo hover-image"
        :to="`/projets/${i+1}`">
          <img src="/photo.jpeg" alt="">
      </nuxt-link>
    </div>
  </NuxtLayout>
  </div>
</template>
<style lang="scss" scoped>
  .page-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: flex-start;
  }
</style>