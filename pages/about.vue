<script setup>
  watch(()=> general.isPreloaderVisible, () => {
    contentAnimation({type: 'text', element: '.page-content__block'})
  });
</script>
<template>
  <div :class="general.pageBg">
    <NuxtLayout 
    name="custom"
    title="About"
    :page-name="$route.name">
    <div class="page-content">
      <div 
        v-for="_ in 10"
        :key="_"
        class="page-content__block p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum sit cum omnis assumenda? Placeat vitae similique assumenda, deleniti nisi voluptates cum consequatur labore dolore et repudiandae deserunt modi molestias voluptas aliquam quas quidem. Mollitia, accusamus? Nesciunt distinctio minus pariatur.
      </div>
    </div>
  </NuxtLayout>
  </div>
</template>
<style lang="scss" scoped>
  .page-content__block {
    padding-bottom: 32px;
  }
</style>