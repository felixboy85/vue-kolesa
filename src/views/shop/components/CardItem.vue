<template>
  <div>
    <div class="main__goods-item main__goods-item--new">
      <div class="main__goods-pic">
        <img class="main__goods-img" :src='good.mainImage' :alt='good.alt' />
        <span v-if='good.span' class="new">new</span>
      </div>
      <div class="main__goods-descr">
        <div class="main__goods-price">{{ good.price }}</div>
        <h3 class="main__goods-title">{{ good.title }}</h3>
        <p class="main__goods-size">{{ good.sizes }}</p>
        <button class="main__btn main__btn-goods visual-hidden" @click="openCard(good)">
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  model: {
    event: 'show',
    prop: 'isShowModal',
  },
  props: {
    good: {
      type: Object,
    },
    url: Function,
    isShowModal: Boolean,
  },
  methods: {
    openCard(data) {
      this.$emit('get', data);
    },
    openModal() {
      this.$emit('show');
    },
  },
};
</script>
