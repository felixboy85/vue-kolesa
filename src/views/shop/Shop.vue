<template>
  <div>
    <div class="main__shop">
      <div class="banner">
        <img
          class="banner__img"
          src="@/assets/images/banner.jpg"
          alt="Баннер"
        />
        <img
          class="banner__img-small"
          src="@/assets/images/banner-small.jpg"
          alt="Баннер"
        />
      </div>
      <HotButtons></HotButtons>
      <MyFilter v-model="activeTabKey" :tabs="tabs"></MyFilter>
      <div class="main__goods main__goods--active">
        <CardItem
          v-for="good in filterItems"
          :data="openCard"
          :good="good"
          :url="getImgUrl"
          :key="good.id"
          :dataCard="modalData"
          @get="openCard"
          @show="handleShowModal"
        >
        </CardItem>
      </div>
      <div class="main__clothes d-none"></div>
      <div class="main__acc d-none"></div>
    </div>
    <Modal
      :url="getImgUrl"
      :data="modalData"
      :isOpen="isShowModal"
      @order="setScore"
      @close="closeModal"
    ></Modal>
  </div>
</template>

<script>
import axios from '@/axios';

import HotButtons from './components/HotButtons.vue';
import MyFilter from './components/MyFilter.vue';
import CardItem from './components/CardItem.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'Shop',
  props: {
    user: Object,
  },
  components: {
    Modal,
    HotButtons,
    MyFilter,
    CardItem,
  },
  data() {
    return {
      isActive: false,
      isShowModal: false,
      activeTabKey: 'all',
      modalData: {},
      clothes: [
        {
          id: 0,
          cost: 50,
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
          alt: 'Портмоне',
          span: true,
          price: '150 Баллов',
          title: 'Портмоне',
          size: '',
          details: 'Брендированное Портмоне от Qazaq Republic.',
        },

        {
          id: 8,
          image: 'acc2.jpg',
          alt: 'Чехол',
          span: true,
          price: '130 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 9,
          image: 'acc2.jpg',
          alt: 'Чехол',
          span: false,
          price: '120 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 10,
          image: 'acc2.jpg',
          alt: 'Чехол',
          span: false,
          price: '125 Баллов',
          title: 'Чехол для Iphone',
          size: '',
          details: 'Брендированный чехол для iPhone.',
        },
        {
          id: 11,
          image: 'acc2.jpg',
          alt: 'Чехол',
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
      return [...this.clothes, ...this.accesories].sort(
        (a, b) => Number(b.span) - Number(a.span),
      );
    },
    filterItems() {
      if (this.activeTabKey === 'clothes') {
        return [...this.clothes];
      }
      if (this.activeTabKey === 'accesories') {
        return [...this.accesories];
      }
      return [...this.clothes, ...this.accesories].sort(
        (a, b) => Number(b.span) - Number(a.span),
      );
    },
  },
  watch: {
    score() {
      this.showCost();
    },
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data').then((response) => {
      this.clothes = response.data;
    });
    axios.get('templates/q3OPxRyEcPvP/data').then((response) => {
      this.accesories = response.data;
    });
    axios.get('templates/7ZW3y5GAuIge/data').then((response) => {
      this.user = response.data;
      console.log('user', response.data);
    });
  },
  methods: {
    openCard(data) {
      this.openModal();
      this.modalData = data;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/images/${item}`);
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
    setScore(price) {
      this.closeModal();
      if (this.user.score < price) {
        alert('денег нет, иди работай');
      } else {
        this.user.score -= price;
        console.log(price);
      }
    },
    setSearch(data) {
      this.search = data;
    },
    showCost() {
      alert(this.score);
    },
    updateUser() {
      this.$emit('updateUser');
    },
  },
};
</script>

<style>
</style>
