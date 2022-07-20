<template>
  <div class="best-offer">
    <div class="flex gap-10">
      <button
        class="best-offer__task text-sm9 font-bold"
        :class="task === Task.BUY ? 'best-offer__task_active' : ''"
        @click="updateTask(Task.BUY)"
      >
        Купить
      </button>
      <button
        class="best-offer__task text-sm9 font-bold"
        :class="task === Task.SELL ? 'best-offer__task_active' : ''"
        @click="updateTask(Task.SELL)"
      >
        Продать
      </button>
    </div>
    <div class="best-offer__buy d:gap-5.75 d:items-center">
      <div class="bmx-mobile d:mx-0">
        <p class="text-sm9">Лучшее предложение</p>
        <div class="mt-2.5 d:flex d:gap-5.75">
          <p>1 ВТС = 43 194 USD</p>
          <p class="mt-0.75 d:mt-0">Банковский перевод</p>
        </div>
      </div>
      <div class="mt-mobile mx-mobile d:m-0">
        <button
          class="button button__round button__border button__border_primary button__border_text-primary"
          v-if="task === Task.SELL"
        >
          Продать
        </button>
        <button
          class="button button__round button__border button__border_primary button__border_text-primary"
          v-else-if="task === Task.BUY"
        >
          Купить
        </button>
      </div>
    </div>

    <div class="mt-6.25">
      <div>
        <p v-if="task === Task.BUY">Что вы хотите купить?</p>
        <p v-else-if="task === Task.SELL">Что вы хотите продать?</p>
        <div class="flex gap-5 flex-wrap mt-2">
          <button
            class="valute-button"
            :class="fromValute === 'btc' ? 'valute-button_active' : ''"
            @click="choiceFromValute('btc')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
          <button
            class="valute-button"
            :class="fromValute === 'ltc' ? 'valute-button_active' : ''"
            @click="choiceFromValute('ltc')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
          <button
            class="valute-button"
            :class="fromValute === 'usdt' ? 'valute-button_active' : ''"
            @click="choiceFromValute('usdt')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
        </div>
      </div>

      <div class="mt-5.75">
        <p>За какую валюту?</p>
        <div class="flex gap-5 flex-wrap mt-2">
          <button
            class="valute-button"
            :class="toValute === 'btc' ? 'valute-button_active' : ''"
            @click="choiceToValute('btc')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
          <button
            class="valute-button"
            :class="toValute === 'ltc' ? 'valute-button_active' : ''"
            @click="choiceToValute('ltc')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
          <button
            class="valute-button"
            :class="toValute === 'usdt' ? 'valute-button_active' : ''"
            @click="choiceToValute('usdt')"
          >
            <img src="/img/test_data/bitcoin.svg" alt="" />
            <span>BTC</span>
          </button>
        </div>
      </div>

      <div class="mt-5.75">
        <p>Выберите способ оплаты:</p>
        <div class="d:flex d:flex-col">
          <FieldSelect class="mt-2 d:mt-1.5" />
          <button
            class="self-center mt-6.5 button button__round button__gradient"
          >
            Найти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum Task {
  SELL = "sell",
  BUY = "buy",
}
const task = ref<string>(Task.BUY);
const updateTask = (value: string): void => {
  task.value = value;
};

const fromValute = ref<string>(null);
const choiceFromValute = (value: string): void => {
  fromValute.value = value;
};

const toValute = ref<string>(null);
const choiceToValute = (value: string): void => {
  toValute.value = value;
};
</script>

<style lang="scss" scoped>
//$
.best-offer {
  flex-shrink: 0;
  background: #f3f6fd;
  border-radius: 20px;
  padding-top: 1.5625rem;
  padding-bottom: 1.9375rem;
  @include screen-desktop {
    width: 538px;
    padding-top: 1.9375rem;
    padding-bottom: 2.75rem;
    padding-right: 1.9375rem;
    padding-left: 2.25rem;
  }
  &__buy {
    @apply mt-4.5 flex flex-col bg-primary-light-0.5 pt-mobile py-6 -mx-mobile d:flex-row d:mx-0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    margin-right: -1.9375rem;
    margin-left: -2.25rem;
    padding-right: 1.9375rem;
    padding-left: 2.25rem;
  }

  &__task {
    padding-bottom: 4px;
    cursor: pointer;
    &_active {
      position: relative;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        bottom: 0;
        background-color: theme("colors.black");
      }
    }
  }
}
</style>
