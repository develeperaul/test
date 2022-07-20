<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <NuxtLink to="/">
          <div class="logo">
            <img src="/img/icons/logo.svg" alt="logo" class="logo__img" />
            <p class="logo__text">TALL-ANT</p>
          </div>
        </NuxtLink>
        <template v-if="!is404">
          <nav class="nav">
            <NuxtLink to="/p2p">Р2Р-платформа</NuxtLink>
            <NuxtLink to="/seller">Стать продавцом</NuxtLink>
            <NuxtLink to="/about">О компании</NuxtLink>
            <NuxtLink to="/referal-programm">Реферальная программа</NuxtLink>
            <NuxtLink to="/blog">Блог</NuxtLink>
            <NuxtLink to="/support">Поддержка</NuxtLink>
          </nav>
          <div class="header__content_right">
            <div class="buttons-reg">
              <button class="button button__noround">Войти</button>
              <button class="button button__round_sm button_primary">
                Регистрация
              </button>
            </div>
            <div class="burger"><span></span><span></span><span></span></div>
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface HeaderProps {
  is404?: boolean;
}
const { is404 } = defineProps<HeaderProps>();
</script>

<style scoped lang="scss">
//$
.header {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_right {
      display: flex;
      align-items: center;
      gap: 0.875rem;
    }
  }

  .buttons-reg {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    & > * {
      @apply text-xs5;
      @include screen-desktop {
        @apply text-sm6;
      }
    }
  }
}

.burger {
  height: 0.5rem;
  width: 1.125rem;
  position: relative;

  @include screen-desktop {
    // max-width: 200px;
    display: none;
  }
  & > span {
    display: inherit;
    width: 100%;
    height: 1.5px;
    border-radius: 15px;
    background-color: #000;
    position: absolute;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
}
</style>
