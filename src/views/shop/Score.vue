<template>
    <div class="main__points">
    <div class="breadcrupms">
        <div class="breadcrumps__wrapper">
            <ul class="breadcrumps__list">
                <li class="breadcrumps__list-item">
                    <a class="breadcrumps__list-link"
                       href="#"
                       @click="goToShop"
                       >Kolesa Shop</a>
                </li>
                <li class="breadcrumps__list-item">
                    <a class="breadcrumps__list-link" href="#" >Как получить баллы</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main__points-items">
        <h3 class="main__points-title">Как получить баллы</h3>
        <div class="main__points-wrapper" >
            <score-card v-for="card in scoreCards"
                        :key="card.id"
                        :card='card'>
            </score-card>
        </div>
    </div>
</div>
</template>
<script>
import ScoreCard from '@/views/shop/ScoreCard.vue';

export default {
  name: 'Score',
  data() {
    return {
      scoreCards: [
        {
          id: '0',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '1',
          title: 'Выступление на конференциях',
          price: '80 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '2',
          title: 'Выступление на конференциях',
          price: '70 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '3',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '4',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '5',
          title: 'Выступление на конференциях',
          price: '50 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '6',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '7',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: '8',
          title: 'Выступление на конференциях',
          price: '90 баллов',
          text: 'Стань спикером на международной конференции по своему направлению',
        },
      ],
    };
  },
  components: {
    ScoreCard,
  },
  methods: {
    goToShop() {
      this.$router.push({ name: 'Shop' });
    },
  },
};
</script>
<style>
</style>
