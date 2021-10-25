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
             <search></search>
            </div>
            <user></user>
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

      <!-- Main -->

      <section class="main">
        <div class="container">
          <div class="main__wrapper">
            <sidebar></sidebar>
            <div class="main__shop">
              <div class="banner">
                <img
                  class="banner__img"
                  src="../src/assets/images/banner.jpg"
                  alt="Баннер"
                />
                <img
                  class="banner__img-small"
                  src="../src/assets/images/banner-small.jpg"
                  alt="Баннер"
                />
              </div>
              <HotButtons></HotButtons>
              <MyFilter v-model="activeTabKey" :tabs="tabs"></MyFilter>
              <div
                  class="main__goods main__goods--active">
                  <CardItem
                    v-for="good in filterItems"
                    :good="good"
                    :url="getImgUrl"
                    :key="good.id"
                    @show="handleShowModal"
                  >
                  </CardItem>
                </div>
              <div class="main__clothes d-none"></div>
              <div class="main__acc d-none"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Modal
      :isOpen="isShowModal"
      @close="closeModal"
      ></Modal>
      <!-- Modal 2 -->
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
import Modal from './components/Modal.vue';
import User from './components/User.vue';
import Search from './components/Search.vue';
import Sidebar from './components/Sidebar.vue';
import MobileMenu from './components/MobileMenu.vue';
import HotButtons from './components/HotButtons.vue';
import MyFilter from './components/MyFilter.vue';
import CardItem from './components/CardItem.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Modal,
    User,
    Search,
    Sidebar,
    MobileMenu,
    HotButtons,
    MyFilter,
    CardItem,
    Footer,
  },
  data() {
    return {
      isActive: false,
      isShowModal: false,
      activeTabKey: 'all',
      aciveCardItem: {},
      clothes: [
        {
          id: 0,
          image: 'shirt.png',
          alt: 'Футболка',
          span: true,
          price: '220 Баллов',
          title: "Футболка 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },

        {
          id: 1,
          image: 'main-img.png',
          alt: 'Толстовка',
          span: true,
          price: '250 Баллов',
          title: "Толстовка 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },

        {
          id: 2,
          image: 'socks.png',
          alt: 'Носки',
          span: false,
          price: '190 Баллов',
          title: "Носки 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированные носки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 3,
          image: 'socks.png',
          alt: 'Носки',
          span: false,
          price: '120 Баллов',
          title: "Носки 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированные носки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 4,
          image: 'socks.png',
          alt: 'Носки',
          span: false,
          price: '145 Баллов',
          title: "Носки 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированные носки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },

        {
          id: 5,
          image: 'socks.png',
          alt: 'Носки',
          span: false,
          price: '135 Баллов',
          title: "Носки 'Эволюционируй или сдохни'",
          size: 'Размеры S/M/L',
          details:
            'Брендированные носки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
      ],
      accesories: [
        {
          id: 6,
          image: 'bottle.png',
          alt: 'Бутылка',
          span: false,
          price: '190 Баллов',
          title: "Бутылка 'Kolesa Group'",
          size: 'Объем 0,7 литра',
          details: 'Брендированная бутылка от Qazaq Republic. Объем 0,7 литра',
        },

        {
          id: 7,
          image: 'acc1.jpg',
          alt: 'Бутылка',
          span: true,
          price: '150 Баллов',
          title: 'Портмоне',
          size: '',
          details: 'Брендированное Портмоне от Qazaq Republic.',
        },

        {
          id: 8,
          image: 'acc2.jpg',
          alt: 'Бутылка',
          span: true,
          price: '130 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 9,
          image: 'acc2.jpg',
          alt: 'Бутылка',
          span: false,
          price: '120 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 10,
          image: 'acc2.jpg',
          alt: 'Бутылка',
          span: false,
          price: '125 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 11,
          image: 'acc2.jpg',
          alt: 'Бутылка',
          span: false,
          price: '110 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
      ],
      tabs: [
        {
          key: 'all',
          name: 'Все товары',
        },
        {
          key: 'clothes',
          name: 'Одежда',
        },
        {
          key: 'accesories',
          name: 'Аксессуары',
        },
      ],
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accesories].sort((a, b) => Number(b.span) - Number(a.span));
    },
    filterItems() {
      if (this.activeTabKey === 'clothes') {
        return [...this.clothes];
      } if (this.activeTabKey === 'accesories') {
        return [...this.accesories];
      }
      return [...this.clothes, ...this.accesories].sort((a, b) => Number(b.span) - Number(a.span));
    },
  },
  methods: {
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/images/${item}`);
    },
    myFilter(tab) {
      this.activeTabKey = tab.key;
    },
    handleChange(tab) {
      this.activeTabKey = tab.key;
    },
    handleShowModal(cardItem) {
      this.aciveCardItem = cardItem;
      this.isShowModal = true;
    },
  },
};
</script>

<style lang="scss">
@import "../src/css/reset.css";
@import "../src/scss/style.scss";
</style>
