<template>
  <div class="">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `${route.meta.title}`,
});
</script>

<style></style>
