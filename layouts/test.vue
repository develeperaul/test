<template>
  <div>
    <Header :is404="true" />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: `${route.meta.title}`,
});
</script>

<style></style>
