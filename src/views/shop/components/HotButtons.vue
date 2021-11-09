<template>
  <div class="main__howto">
    <a class="btn__howto btn__howto-green" href="#">
      <img
        class="btn__howto-img"
        src="@/assets/images/plus-icon.png"
        alt="Плюс"
      />
      Получить баллы</a
    >
    <a class="btn__howto btn__howto-yellow" href="#"
    @click.prevent="goToPage"
      ><img
        class="btn__howto-img"
        src="@/assets/images/questuons-icon.png"
        alt="Вопрос"
      />Как получить баллы</a
    >
    <a class="btn__howto btn__howto-blue" href="#"
      ><img
        class="btn__howto-img"
        src="@/assets/images/gift-icon.png"
        alt="Подарок"
      />Подарить баллы</a
    >
  </div>
</template>

<script>
export default {
  name: 'HotButtons',
  methods: {
    goToPage() {
      this.$router.push({ name: 'Score' });
    },
  },
};
</script>
