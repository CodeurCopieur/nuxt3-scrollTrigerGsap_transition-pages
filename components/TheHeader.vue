<script setup>
  const links = [
    {href: '/', text: 'Home'},
    {href: '/about', text: 'About'},
    {href: '/projets', text: 'Projets'},
  ];
</script>
<template>
  <header class="header">
    <nuxt-link 
      v-for="link in links"
      :key="link"
      :to="link.href"
      class="hearder-link hover-fadein">
      {{ link.text }}
    </nuxt-link>
  </header>

</template>

<style lang="scss" scoped>

  .header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0 20px;
    z-index: $z-header;
  }

  .hearder-link {
    margin: 0 20px;
    text-transform: uppercase;
  }

  .page_white .header {
    background-color: $white;
  }
  .page_black .header {
    background-color: $black;
  }

</style>