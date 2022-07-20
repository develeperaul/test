<template>
  <div class="select-menu" :class="active && 'active'">
    <div class="select-btn" @click="toggleSelect">
      <span class="sBtn-text"
        >{{ paymentMethod ? paymentMethod.label : "Выберите способ" }}
      </span>
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.635 1.62413C17.8241 1.44338 17.7678 1.19044 17.5093 1.05919C17.2508 0.927931 16.8879 0.968052 16.6987 1.1488L17.635 1.62413ZM9.50979 8.70475L9.04727 8.94993L9.51768 9.38229L9.97792 8.94241L9.50979 8.70475ZM2.01016 1.14129C1.81687 0.963627 1.4531 0.929372 1.19766 1.06478C0.942223 1.20018 0.891845 1.45398 1.08514 1.63164L2.01016 1.14129ZM16.6987 1.1488L9.04165 8.46709L9.97792 8.94241L17.635 1.62413L16.6987 1.1488ZM9.9723 8.45958L2.01016 1.14129L1.08514 1.63164L9.04727 8.94993L9.9723 8.45958Z"
          fill="#2C2C2C"
        />
      </svg>
    </div>

    <ul class="options">
      <li
        v-for="option in paymentOptions"
        :key="option.id"
        class="option"
        @click="choiceOption(option.id)"
      >
        <span class="option-text">{{ option.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface PaymentOption {
  id: number;
  label: string;
}
const paymentMethod = ref<PaymentOption>(null);
const paymentOptions = <PaymentOption[]>[
  {
    id: 1,
    label: "Картой",
  },
  {
    id: 2,
    label: "Наличкой",
  },
];

const active = ref(false);
const toggleSelect = (): void => {
  active.value = !active.value;
};

const choiceOption = (value: number): void => {
  paymentMethod.value = paymentOptions.find((option) => option.id === value);
  active.value = false;
};
</script>

<style lang="scss" scoped>
$width: 399px;

.select-menu {
  max-width: $width;
  .select-btn {
    @apply text-xs8 d:text-xs4-1;
    display: flex;
    height: 44px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .options {
    position: absolute;
    width: $width;
    overflow-y: auto;
    max-height: 0px;
    // padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // animation-name: fadeInDown;
    // -webkit-animation-name: fadeInDown;
    animation-duration: 0.35s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.35s;
    -webkit-animation-fill-mode: both;
    .option {
      display: flex;
      height: 44px;
      cursor: pointer;
      padding: 0 16px;
      border-radius: 8px;
      align-items: center;
      background: #fff;
      &:hover {
        background: #f2f2f2;
      }
      .option-text {
        @apply text-xs8 d:text-xs4-1;
        color: #333;
      }
    }
  }
}
.select-btn {
  i {
    font-size: 25px;
    transition: 0.3s;
  }
}
.select-menu.active {
  .select-btn {
    i {
      transform: rotate(-180deg);
    }
  }
  .options {
    display: block;
    opacity: 0;
    z-index: 10;
    max-height: 295px;

    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
  }
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
  }
}
</style>
