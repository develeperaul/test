<template>
  <section class="mt-7.5 d:mt-29">
    <div class="container">
      <div class="d:flex gap-28">
        <img class="mx-auto" src="/img/sculpturs/404.png" alt="" />
        <div class="text-center mt-12.25 d:m-0 self-center">
          <h1 class="text-xl2">404</h1>
          <h3 class="mt-5.25">Страница не найдена</h3>
          <p class="mt-4.5">
            К сожалению, запрашиваемая вами страница не существует
          </p>
          <NuxtLink
            to="/"
            class="button button__round button_primary mt-7.5 inline-block"
          >
            Вернуться на главную
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "test",
  title: "Страница не найдена",
});
</script>

<style></style>
