<template>
  <div id="app">
    <div class="page">
      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <button class="header__hamburger-btn">
                <img
                  class="header__hamburger-img"
                  src="../src/assets/images/burger.svg"
                  alt="Меню"
                />
              </button>
              <a class="header__logo" href="#"
                ><img
                  class="header__logo-img"
                  src="../src/assets/images/header_logo.svg"
                  alt="Kolesa Logo"
              /></a>
             <Search :modelValue="value"
                      @update:modelValue="value = $event">
              </Search>
            </div>
            <User @updateUser="updateUser"></User>
            <form class="header__right-search">
              <input
                class="header__right-input"
                type="text"
                placeholder="Поиск"
              />
              <button type="button" class="header__right-btn">
                <img
                  class="header__right-img"
                  src="../src/assets/images/search-mobile.svg"
                  alt="Поиск"
                />
              </button>
            </form>
          </div>
        </div>
      </header>

      <!-- Hamburger menu -->

      <MobileMenu></MobileMenu>

      <section class="main">
        <div class="container">
          <div class="main__wrapper">
            <sidebar></sidebar>
            <router-view
              @updateUser="updateUser"
            ></router-view>
          </div>
        </div>
      </section>
      <Footer></Footer>

      <div class="overlay__thanks">
        <div class="thanks">
          <img
            class="thanks__img"
            src="../src/assets/images/hands-emoji.png"
            alt="Ручки"
          />
          <h3 class="thanks__title">Заказ успешно оформлен!</h3>
          <p class="thanks__descr">
            Для получения заказа подойди в HR отдел к Дяде Рику
          </p>
          <button class="button__thanks">Круто, вернуться в Kolesa Shop</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './layouts/components/User.vue';
import Search from './layouts/components/Search.vue';
import Sidebar from './layouts/components/Sidebar.vue';
import MobileMenu from './layouts/components/MobileMenu.vue';
import Footer from './layouts/components/Footer.vue';

export default {
  name: 'App',
  components: {
    User,
    Search,
    Sidebar,
    MobileMenu,
    Footer,
  },
  data() {
    return {
      value: '',
    };
  },
  watch: {
    score() {
      this.showCost();
    },
  },
  methods: {
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/images/${item}`);
    },
    showCost() {
      // eslint-disable-next-line
      alert(this.score);
    },
    updateUser(data) {
      this.user = data;
    },
  },
};
</script>

<style lang="scss">
@import "../src/css/reset.css";
@import "../src/scss/style.scss";
</style>
