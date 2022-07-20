<template>
  <section class="section section_space-t--first">
    <div class="container">
      <div class="d:flex d:gap-13.5">
        <div class="d:mt-15">
          <h1>
            Покупайте и продавайте криптовалюту выгодно и безопасно с TALL-ANT
          </h1>
          <p class="pt-5 text-sm3 d:text-sm7">
            С Р2Р площадкой TALL-ANT удобно покупать и продавать криптовалюту с
            минимальными комиссиями. Создайте аккаунт и начните торговать прямо
            сейчас!
          </p>
        </div>
        <best-offer class="mt-m-section d:mt-0" />
      </div>
    </div>
  </section>

  <section class="section section_space-t">
    <div class="container">
      <h2 class="section__title">P2P-платформа с низкими комиссиями</h2>
      <p class="section__text pt-5 text-sm3 d:text-sm7">
        TALL-ANT имеет множество функций, которые делают его лучшим местом для
        начала торговли. Начните торговать с комфортом сегодня!
      </p>
    </div>
    <div class="d:container">
      <div class="cards mt-5 ml-3.75 d:ml-0 d:mt-10">
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/commission.svg"
            alt="Комиссии"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Минимальные комиссии</h3>
            <p class="card__text">
              Комиссии для создателей <br />
              объявления минимальны <br />
              и не превышают 0,5%
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/anonymity.svg"
            alt="Анонимность"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Анонимная торговля</h3>
            <p class="card__text">
              Все сделки проходят анонимно, <br />
              при этом сохраняется <br />
              безопасность торговли
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/payment_methods.svg"
            alt="Методы"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Более 60 способов оплаты</h3>
            <p class="card__text">
              Большой выбор способов <br />
              оплаты, чтобы вы легко <br />
              торговали криптовалютой
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/telegram_bot.svg"
            alt="Бот"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Удобный Telegram-бот</h3>
            <p class="card__text">
              Наш бот включает все функции <br />
              веб-платформы и разработан <br />
              для мгновенных сделок
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/save_mode.svg"
            alt="Щит"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Безопасные сделки</h3>
            <p class="card__text">
              Tall-ant гарантирует выполнение <br />
              сделки, удерживая монеты <br />
              продавца до завершения сделки
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card__icon"
            src="/img/icons/p2p/reliable_wallet.svg"
            alt="Кошелёк"
          />
          <div class="mt-5 d:mt-3.25">
            <h3>Надежный кошелек</h3>
            <p class="card__text">
              Безопасный кошелек <br />
              для хранения, получения <br />
              и отправки криптовалюты
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section_space-t for-seller">
    <div class="container">
      <h2 class="section__title">Для продавцов криптовалюты</h2>
      <div class="d:flex d:gap-17.5 mt-3.25 d:mt-7.5">
        <img
          class="mx-auto for-seller__img"
          src="/img/sculpturs/for_sellers.png"
          alt="for-seller"
        />
        <div class="mt-6.25 d:mt-11.25">
          <h4>
            Продавайте собственные биткоины на нашем сервисе и получайте доход.
            Для продавцов с объемом торговли более 1000 USD комиссии снижены!
          </h4>
          <p class="mt-5">
            С TALL-ANT вы можете начать зарабатывать всего за несколько минут.
            Сниженные комиссии для продавцов с объемом торговли более 1000 USD.
            Зарегистрируйтесь и создайте свое первое предложение.
          </p>
          <div class="d:flex d:gap-6.25 d:mt-8.25">
            <button
              class="mt-6.5 button button__round bg-primary text-white d:m-0"
            >
              Зарегистрироваться
            </button>

            <button
              class="button button__round button__border button__border_primary mt-5 d:m-0"
            >
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section_space-t">
    <div class="container">
      <h2 class="section__title">Новости</h2>
      <p class="section__text mt-5 text-sm3 d:text-sm7">
        Последние новости из мира криптовалют. Будьте в курсе всех событий на
        криптовалютном рынке, следите за обновлениями компании
      </p>
    </div>

    <div class="slider bg-gradient mt-6.25 d:mt-7.75">
      <div class="container slider__wrapper">
        <swiper
          :pagination="pagination"
          :navigation="navigation"
          :modules="modules"
          :spaceBetween="16"
          class="mySwiper"
          :width="274"
          :breakpoints="{
            '1440': {
              width: 496,
              spaceBetween: 60,
            },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="card-news">
              <button
                class="button-round__md button__border button__border_primary"
              >
                Мировые новости
              </button>
              <div class="mt-5 d:mt-6.25">
                <h4>Курс биткоина начал расти. Преодолена важная отметка</h4>
                <p class="mt-3">
                  За сутки цена криптовалюты выросла на 3%, а капитализация
                  увеличилась до $720 млрд. Это произошло после того, как
                  стоимость актива...
                </p>
              </div>
              <div class="mt-5 d:mt-10">
                <p>31.01.2022</p>
                <p class="mt-2">На чтение: 7 минут</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card-news">
              <button
                class="button-round__md button__border button__border_primary"
              >
                Мировые новости
              </button>
              <div class="mt-5 d:mt-6.25">
                <h4>Курс биткоина начал расти. Преодолена важная отметка</h4>
                <p class="mt-3">
                  За сутки цена криптовалюты выросла на 3%, а капитализация
                  увеличилась до $720 млрд. Это произошло после того, как
                  стоимость актива...
                </p>
              </div>
              <div class="mt-5 d:mt-10">
                <p>31.01.2022</p>
                <p class="mt-2">На чтение: 7 минут</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card-news">
              <button
                class="button-round__md button__border button__border_primary"
              >
                Мировые новости
              </button>
              <div class="mt-5 d:mt-6.25">
                <h4>Курс биткоина начал расти. Преодолена важная отметка</h4>
                <p class="mt-3">
                  За сутки цена криптовалюты выросла на 3%, а капитализация
                  увеличилась до $720 млрд. Это произошло после того, как
                  стоимость актива...
                </p>
              </div>
              <div class="mt-5 d:mt-10">
                <p>31.01.2022</p>
                <p class="mt-2">На чтение: 7 минут</p>
              </div>
            </div>
          </swiper-slide>
          <div class="navigation mt-8.25">
            <div class="swiper-prev">
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.605576 1.19496C0.418082 0.992224 0.430435 0.675883 0.633168 0.488388C0.835901 0.300894 1.15224 0.313248 1.33974 0.515981L0.605576 1.19496ZM4.02805 4.15919L4.39513 3.8197L4.73462 4.18678L4.36754 4.52627L4.02805 4.15919ZM1.06381 7.58166C0.861081 7.76916 0.54474 7.7568 0.357245 7.55407C0.169751 7.35134 0.182105 7.035 0.384838 6.8475L1.06381 7.58166ZM1.33974 0.515981L4.39513 3.8197L3.66097 4.49868L0.605576 1.19496L1.33974 0.515981ZM4.36754 4.52627L1.06381 7.58166L0.384838 6.8475L3.68856 3.79211L4.36754 4.52627Z"
                  fill="#2C2C2C"
                />
              </svg>
            </div>
            <div class="swiper-next">
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.605576 1.19496C0.418082 0.992224 0.430435 0.675883 0.633168 0.488388C0.835901 0.300894 1.15224 0.313248 1.33974 0.515981L0.605576 1.19496ZM4.02805 4.15919L4.39513 3.8197L4.73462 4.18678L4.36754 4.52627L4.02805 4.15919ZM1.06381 7.58166C0.861081 7.76916 0.54474 7.7568 0.357245 7.55407C0.169751 7.35134 0.182105 7.035 0.384838 6.8475L1.06381 7.58166ZM1.33974 0.515981L4.39513 3.8197L3.66097 4.49868L0.605576 1.19496L1.33974 0.515981ZM4.36754 4.52627L1.06381 7.58166L0.384838 6.8475L3.68856 3.79211L4.36754 4.52627Z"
                  fill="#2C2C2C"
                />
              </svg>
            </div>
          </div>
          <div class="swiper-fraction mt-5 d:mt-3"></div>
        </swiper>
      </div>
    </div>
  </section>

  <section class="section section_space-t invite">
    <div class="container">
      <h2 class="section__title">Реферальная программа</h2>
      <div class="d:flex d:gap-32 mt-3.25 d:mt-7.5">
        <img
          class="invite__img order-2"
          src="/img/sculpturs/invite.png"
          alt="invite"
        />
        <div class="order-1 mt-5">
          <h4>
            Приглашайте друзей и зарабатывайте 0,15% от суммы их сделок. Для
            первых 1000 пользователей улучшенные условия по реферальной
            программе!
          </h4>
          <ul class="invite__list mt-5 d:mt-6.25">
            <li>
              <img src="/img/icons/arrow-right-primary.svg" alt="roght-arrow" />
              <p>Нет лимита по приглашениям</p>
            </li>
            <li>
              <img src="/img/icons/arrow-right-primary.svg" alt="roght-arrow" />
              <p>Программа начинает действовать сразу</p>
            </li>
            <li>
              <img src="/img/icons/arrow-right-primary.svg" alt="roght-arrow" />
              <p>
                Реферал должен зарегистрироваться в сервисе по вашей реферальной
                ссылке
              </p>
            </li>
            <li>
              <img src="/img/icons/arrow-right-primary.svg" alt="roght-arrow" />
              <p>
                Участвуйте в конкурсах и получайте улучшенные условия по
                программе
              </p>
            </li>
          </ul>
          <button class="mt-6.5 button button__round button_primary d:mt-10">
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section section_space-t">
    <div class="container">
      <h2 class="section__title">Обучение</h2>
      <p class="section__text pt-5 text-sm3 d:text-sm7">
        Мы разработали уникальную программу обучения в игровой форме с реальным
        вознаграждением. Пройдите все этапы и получите вознаграждение в размере
        10 USD за успешное прохождение обучения!
      </p>

      <swiper
        :pagination="pagination1"
        :navigation="navigation1"
        :modules="modules"
        :spaceBetween="16"
        class="learnSwiper mt-4 d:mt-10"
        :breakpoints="{
          '1440': {
            width: 1008,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="rounded-sm overflow-hidden">
            <img src="/img/test_data/learn.jpg" alt="test" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/img/test_data/learn.jpg" alt="test" />
        </swiper-slide>

        <!-- <div class="navigation ">
          <div class="swiper-prev">
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.605576 1.19496C0.418082 0.992224 0.430435 0.675883 0.633168 0.488388C0.835901 0.300894 1.15224 0.313248 1.33974 0.515981L0.605576 1.19496ZM4.02805 4.15919L4.39513 3.8197L4.73462 4.18678L4.36754 4.52627L4.02805 4.15919ZM1.06381 7.58166C0.861081 7.76916 0.54474 7.7568 0.357245 7.55407C0.169751 7.35134 0.182105 7.035 0.384838 6.8475L1.06381 7.58166ZM1.33974 0.515981L4.39513 3.8197L3.66097 4.49868L0.605576 1.19496L1.33974 0.515981ZM4.36754 4.52627L1.06381 7.58166L0.384838 6.8475L3.68856 3.79211L4.36754 4.52627Z"
                fill="#2C2C2C"
              />
            </svg>
          </div>
          <div class="swiper-next">
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.605576 1.19496C0.418082 0.992224 0.430435 0.675883 0.633168 0.488388C0.835901 0.300894 1.15224 0.313248 1.33974 0.515981L0.605576 1.19496ZM4.02805 4.15919L4.39513 3.8197L4.73462 4.18678L4.36754 4.52627L4.02805 4.15919ZM1.06381 7.58166C0.861081 7.76916 0.54474 7.7568 0.357245 7.55407C0.169751 7.35134 0.182105 7.035 0.384838 6.8475L1.06381 7.58166ZM1.33974 0.515981L4.39513 3.8197L3.66097 4.49868L0.605576 1.19496L1.33974 0.515981ZM4.36754 4.52627L1.06381 7.58166L0.384838 6.8475L3.68856 3.79211L4.36754 4.52627Z"
                fill="#2C2C2C"
              />
            </svg>
          </div>
        </div> -->
        <div class="swiper-paginate mt-3 d:mt-3.75"></div>
      </swiper>
      <div class="mt-6.5 d:flex justify-center">
        <button class="button button__round button_primary">
          Начать обучение
        </button>
      </div>
    </div>
  </section>

  <section class="section section_space-t">
    <div class="container">
      <h2 class="section__title">Телеграм-бот</h2>
      <div class="d:flex d:gap-15 mt-3.75 d:mt-7">
        <img class="mx-auto" src="/img/phone.png" alt="phone" />
        <div class="mt-5">
          <p class="text-sm3 d:text-sm7">
            Переходите в Телеграм-бот TALL-ANT и совершайте сделки через
            мессенджер в формате 24/7
          </p>
          <ul class="mt-5">
            <li>&bull; Полный функционал веб-сервиса</li>
            <li>&bull; Комфортная и безопасная торговля</li>
            <li>&bull; Круглосуточная поддержка</li>
            <li>&bull; Переводы в любое время</li>
          </ul>
          <button class="mt-7.5 button button__round button_primary d:mt-8.25">
            Перейти в Telegram
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
// import required modules
import { Pagination, Navigation } from "swiper";
const modules = [Pagination, Navigation];
const pagination = {
  type: "fraction",
  el: ".swiper-fraction",
  bulletActiveClass: "numb-active",
  bulletClass: "numb",
  renderFraction: function (currentClass, totalClass) {
    console.log(
      '<span class="' +
        "0" +
        currentClass +
        '"></span>' +
        " of " +
        '<span class="' +
        totalClass +
        '"></span>'
    );
    return (
      '<span class="' +
      currentClass +
      '"></span>' +
      "/" +
      '<span class="' +
      totalClass +
      '"></span>'
    );
  },
};
const pagination1 = {
  type: "bullets",
  el: ".swiper-paginate",
  bulletActiveClass: "numb-active",
  bulletClass: "numb",
  // renderBullet: function (index, className) {

  // },
};
const navigation = {
  nextEl: ".swiper-next",
  prevEl: ".swiper-prev",
};

definePageMeta({
  title: "Главная",
});
</script>

<style lang="scss" scoped>
h1 {
  background: linear-gradient(87.19deg, #2c6fff 13.2%, #9d1cf7 82.38%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
