<template>
  <div class="header__right">
    <a class="header__user" href="http://www.google.com" target="_blank">
      <img class="header__ava" :src="user.avatarUrl" alt="Деда Рик" />
      <div class="header__user-info">
        <div class="header__username">{{ user.name }}</div>
        <div class="header__userpoints">{{ user.score }} баллов</div>
      </div>
    </a>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'User',
  data() {
    return {
      user: {
        score: 0,
        name: '',
        avatarUrl: '',
      },
    };
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data').then((response) => {
      this.user = response.data;
      console.log('user', response.data);
    });
  },
  methods: {
    updateUser(data) {
      this.$emit('updateUser', data);
    },
  },
};
</script>
