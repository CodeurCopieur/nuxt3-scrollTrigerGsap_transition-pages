<script setup>
  watch(()=> general.isPreloaderVisible, () => {
    contentAnimation({type: 'image', element: '.page-content__block-photo'})
    contentAnimation({type: 'text', element: '.page-content__block-text'})
    contentAnimation({type: 'text', element: '.page-next__project'})
  });
</script>
<template>
  <div :class="general.pageBg">
    <NuxtLayout 
    name="custom"
    :title="`Projet ${$route.params.id}`"
    :page-name="`projet-${$route.params.id}`">

    <div class="page-content">
      <div 
        v-for="n in 3"
        :key="n"
        class="page-content__block">
        
        <div class="page-content__block-photo">
          <img src="/photo.jpeg" alt="">
        </div>

        <div class="page-content__block-text p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos repudiandae rem! Sed expedita eius libero, a architecto hic officia.
        </div>
        

      </div>

      <div class="page-next__project">
          <nuxt-link
            class="page-next__project-link hover-fadein h2"
            :to="`/projets/${+$route.params.id+1}`">
            Projet suivant - {{ +$route.params.id+1 }}
          </nuxt-link>
        </div>
    </div>
  </NuxtLayout>
  </div>
</template>
<style lang="scss" scoped>
  .page-content__block {
    padding: 32px 0;
  }

  .page-content__block-text {
    margin-top: 16px;
  }

  .page-next__project {
    padding-bottom: 32px;
    margin-top: 32px;
  }
</style>