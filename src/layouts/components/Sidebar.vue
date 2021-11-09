<template>
  <aside class="aside">
    <nav class="menu">
      <ul class="menu__list">
        <li
        class="menu__list-item"
        v-for="(item, index) in routes"
        :key="index">
          <router-link class="menu__list-link"
             :to="item.link"
             :exact="item.isExact"
             active-class="menu__list-link--active"
             v-html="item.label"
             ></router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      routes: [
        {
          link: '/',
          label: 'Оргсхема',
          isExact: true,
        },
        {
          link: '/about',
          label: 'Kolesa <span>Team</span>',
          isExact: true,
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
          isExact: false,
        },
        {
          link: '#',
          label: 'Картина компании',
        },
        {
          link: '#',
          label: 'Новости',
        },
        {
          link: '#',
          label: 'Education',
        },
        {
          link: '#',
          label: 'Guidelines',
        },
        {
          link: '#',
          label: 'Библиотека',
        },
        {
          link: '#',
          label: 'FAQ',
        },
      ],
    };
  },
};
</script>
