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
              <form class="header__form" action="#">
                <input class="header__input" type="text" placeholder="Поиск" />
                <button class="header__search">
                  <img
                    class="header__img"
                    src="../src/assets/images/search-icon.svg"
                    alt="Поиск"
                  />
                </button>
              </form>
            </div>
            <div class="header__right">
              <a
                class="header__user"
                href="http://www.google.com"
                target="_blank"
              >
                <img
                  class="header__ava"
                  src="../src/assets/images/user.png"
                  alt="Деда Рик"
                />
                <div class="header__user-info">
                  <div class="header__username">Деда Рик</div>
                  <div class="header__userpoints">300 баллов</div>
                </div>
              </a>
            </div>
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

      <div class="hamburger__menu">
        <div class="hamburger__menu-wrapper">
          <div class="hamburger__menu-top">
            <div class="hamburger__menu-logo">
              <a class="hamburger__menu-logo__link" href="#"
                ><img
                  class="hamburger__menu-img"
                  src="../src/assets/images/header_logo.svg"
                  alt="Логотип"
              /></a>
            </div>
            <a class="hamburger__menu-user">
              <img
                class="hamburger__menu-ava"
                src="../src/assets/images/user.png"
                alt="Аватарка"
              />
              <div class="hamburger__menu-name">
                Абдурахман <br />
                Калиакпаров
              </div>
            </a>
          </div>
          <nav class="hamburger__menu-bottom">
            <ul class="hamburger__menu-list">
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Оргсхема</a>
              </li>
              <li class="hamburger__menu-item">
                <a
                  class="hamburger__menu-link hamburger__menu-link--active"
                  href="№"
                  >Kolesa Team</a
                >
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№"
                  >Kolesa <span>Shop</span></a
                >
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Картина компании</a>
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Новости</a>
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Education</a>
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Guidelines</a>
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">Библиотека</a>
              </li>
              <li class="hamburger__menu-item">
                <a class="hamburger__menu-link" href="№">FAQ</a>
              </li>
            </ul>
            <a class="hamburger__menu-exit" href="#">Выйти из профиля</a>
          </nav>
        </div>
      </div>

      <!-- Main -->

      <section class="main">
        <div class="container">
          <div class="main__wrapper">
            <aside class="aside">
              <nav class="menu">
                <ul class="menu__list">
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Оргсхема</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#"
                      >Kolesa <span>Team</span></a
                    >
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Kolesa Shop</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link menu__list-link--active" href="#"
                      >Картина компании</a
                    >
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Новости</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Education</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Guidelines</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Библиотека</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">FAQ</a>
                  </li>
                </ul>
              </nav>
            </aside>
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
              <div class="main__howto">
                <a class="btn__howto btn__howto-green" href="#">
                  <img
                    class="btn__howto-img"
                    src="../src/assets/images/plus-icon.png"
                    alt="Плюс"
                  />
                  Получить баллы</a
                >
                <a class="btn__howto btn__howto-yellow" href="#"
                  ><img
                    class="btn__howto-img"
                    src="../src/assets/images/questuons-icon.png"
                    alt="Вопрос"
                  />Как получить баллы</a
                >
                <a class="btn__howto btn__howto-blue" href="#"
                  ><img
                    class="btn__howto-img"
                    src="../src/assets/images/gift-icon.png"
                    alt="Подарок"
                  />Подарить баллы</a
                >
              </div>
              <div
              class="main__tabs">
                <button
                  v-for="tab in tabs"
                  :key="tab.key"
                  class="main__tab"
                  :class="{main__tabactive: tab.key === activeTabKey }"
                  @click="myFilter(tab)"
                  href="#"
                  >
                  {{tab.name}}
                </button>
              </div>
              <div
                class="main__goods main__goods--active"
              >
                <div
                  :data-id="item.id"
                  v-for="item in filterItems"
                  :key="item.id"
                  class="main__goods-item main__goods-item--new"
                >
                  <div class="main__goods-pic">
                    <img class="main__goods-img"
                    :src="getImgUrl(item.image)"
                    :alt="item.alt" />
                    <span v-if="item.span" class="new">new</span>
                  </div>
                  <div class="main__goods-descr">
                    <div class="main__goods-price">{{item.price}}</div>
                    <h3 class="main__goods-title">{{item.title}}</h3>
                    <p class="main__goods-size">{{item.size}}</p>
                    <button
                      @click="openModal"
                      class="main__btn main__btn-goods visual-hidden"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
              <div class="main__clothes d-none"></div>
              <div class="main__acc d-none"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <div class="footer__left">
              <div class="footer__copyright">© Kolesa Group</div>
              <div class="footer__social">
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="../src/assets/images/instagram.svg"
                    alt="Инстаграм"
                /></a>
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="../src/assets/images/youtube.svg"
                    alt="Ютюб"
                /></a>
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="../src/assets/images/vk.svg"
                    alt="Вконтакте"
                /></a>
              </div>
            </div>
            <div class="footer__right">
              <div class="footer__text">
                <a class="footer__descr">Есть идеи что улучшить?</a>
                <a class="footer__descr">Не знаешь, с кем решить проблему?</a>
              </div>
              <button class="main__btn main__btn--white">Написать</button>
            </div>
          </div>
        </div>
      </footer>

      <!-- Modal -->
      <div :class="{show: isShowModal}"
      @click="closeModal"
      class="overlay">
        <div
        @click.stop
        class="modal">
          <!-- <div class="modal__top">
                    <button class="modal__back-btn">
                        <img class="modal__back-img"
                        src="../src/assets/images/arrow-back-bold.svg"
                        alt="Назад">
                    </button>
                    <a class="header__logo"
                    href="#">
                    <img class="header__logo-img"
                    src="../src/assets/images/header_logo.svg"
                    alt="Kolesa Logo"></a>
                    <form class="header__right-search">
                        <input class="header__right-input" type="text" placeholder="Поиск">
                        <button class="header__right-btn">
                            <img class="header__right-img"
                            src="../src/assets/images/search-mobile.svg"
                            alt="Поиск">
                        </button>
                    </form>
                </div> -->
          <div class="modal__left">
            <img
              class="modal__img"
              src="../src/assets/images/main-img.png"
              alt="Толстовка"
            />
            <div class="modal__thumbnails">
              <img
                class="modal__thumbnail"
                src="../src/assets/images/image1.png"
                alt="Мини-картинка-1"
              />
              <img
                class="modal__thumbnail modal__thumbnail--active"
                src="../src/assets/images/image2.png"
                alt="Мини-картинка-1"
              />
              <img
                class="modal__thumbnail"
                src="../src/assets/images/Image3.png"
                alt="Мини-картинка-1"
              />
            </div>
          </div>
          <div class="modal__right">
            <div class="modal__title">Футболка "Эволюционируй или сдохни"</div>
            <div class="modal__item-wrapper">
              <div class="modal__item-info">
                <div class="modal__item-price">100 баллов</div>
                <a href="#" class="main__btn main__btn--yellow"
                  >Попросить 50 баллов</a
                >
              </div>
              <div class="modal__item-balance">
                <div class="modal__item-supheader">Твой баланс:</div>
                <div class="modal__item-points">50 баллов</div>
              </div>
            </div>
            <form class="modal__form" action="#">
              <div class="colors">
                <h3 class="colors__title">Цвета:</h3>
                <div class="colors__wrapper">
                  <input
                    class="custom-radio blue visual-hidden"
                    type="radio"
                    id="blue"
                    name="colors"
                    checked
                  />
                  <label class="label__color" for="blue">Синий</label>
                  <input
                    class="custom-radio beige visual-hidden"
                    type="radio"
                    id="beige"
                    name="colors"
                  />
                  <label class="label__color" for="beige">Бежевый</label>
                  <input
                    class="custom-radio gray visual-hidden"
                    type="radio"
                    id="gray"
                    name="colors"
                  />
                  <label class="label__color" for="gray">Серый</label>
                </div>
              </div>
              <div class="sizes">
                <h3 class="sizes__title">Размер:</h3>
                <div class="sizes__wrapper">
                  <input
                    class="custom-radio__size visual-hidden"
                    type="radio"
                    id="small"
                    name="sizes"
                    checked
                  />
                  <label class="label__size" for="small">S</label>
                  <input
                    class="custom-radio__size visual-hidden"
                    type="radio"
                    id="medium"
                    name="sizes"
                  />
                  <label class="label__size" for="medium">M</label>
                  <input
                    class="custom-radio__size visual-hidden"
                    type="radio"
                    id="large"
                    name="sizes"
                  />
                  <label class="label__size" for="large">L</label>
                </div>
              </div>
            </form>
            <div class="details">
              <h3 class="details__title">Детали:</h3>
              <p class="detail__descr">
                Брендированная толстовка от Qazaq Republic. Материал: Хлопок
                80%, Вискоза 20%
              </p>
            </div>
            <div class="question">
              <h3 class="question__title">Как выбрать размер:</h3>
              <p class="question__txt">Написать дяде Рику для уточнения.</p>
            </div>
          </div>
          <div class="modal__close">
            <img
              @click="closeModal"
              class="close__btn"
              src="../src/assets/images/close-big.svg"
              alt="close"
            />
          </div>
        </div>
      </div>

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
export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
      isActive: false,
      activeTabKey: 'all',
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
  },
};
</script>

<style lang="scss">
@import "../src/css/reset.css";
@import "../src/scss/style.scss";
</style>
