<template>
  <div class="overlay"
  :class="{ show: isOpen }"
  @click="closeModal">
    <div class="modal"
    @click.stop>
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
          :src='(data.mainImage)'
          :alt='data.alt'
        />
        <div class="modal__thumbnails">
          <img
            class="modal__thumbnail"
            src="@/assets/images/image1.png"
            alt="Мини-картинка-1"
          />
          <img
            class="modal__thumbnail modal__thumbnail--active"
            src="@/assets/images/image2.png"
            alt="Мини-картинка-1"
          />
          <img
            class="modal__thumbnail"
            src="@/assets/images/Image3.png"
            alt="Мини-картинка-1"
          />
        </div>
      </div>
      <div class="modal__right">
        <div class="modal__title">{{data.title}}</div>
        <div class="modal__item-wrapper">
          <div class="modal__item-info">
            <div class="modal__item-price">{{data.price}} Баллов</div>
            <a href="#" class="main__btn main__btn--small" @click="order"
              >Заказать</a
            >
          </div>
          <div class="modal__item-balance">
            <div class="modal__item-supheader">Твой баланс:</div>
            <div class="modal__item-points">{{this.$store.state.userInfo.score}} баллов</div>
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
            {{data.description}}
          </p>
        </div>
        <div class="question">
          <h3 class="question__title">Как выбрать размер:</h3>
          <p class="question__txt">Написать дяде Рику для уточнения.</p>
        </div>
      </div>
      <div class="modal__close">
        <img
          class="close__btn"
          src="@/assets/images/close-big.svg"
          alt="close"
          @click="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    data: Object,
    url: Function,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    order() {
      const { score } = this.$store.state.userInfo;
      if (score - this.data.price <= 0) {
        // eslint-disable-next-line
        alert('Баллов нет, иди работай');

        return;
      }
      this.$store.commit('setNewScore', this.data.price);
    },
  },
};
</script>
