<template>
  <div>
    <div class="main__points-item">
      <div class="main__points-header">{{ card.title }}</div>
      <div class="main__points-sum">{{ card.price }}</div>
      <p class="main__points-descr">
        {{ card.text }}
      </p>
      <button class="main__btn mt-auto">Отправить заявку</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScoreCard',
  props: {
    card: Object,
  },
};
</script>
<style>
</style>
