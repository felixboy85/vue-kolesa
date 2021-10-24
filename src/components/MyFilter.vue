<template>
  <div class="main__tabs">
    <button
      class="main__tab"
      v-for="tab in tabs"
      :key="tab.key"
      :class="{ main__tabactive: tab.key === activeTabKey }"
      @click="myFilter(tab)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyFilter',
  data() {
    return {
      activeTabKey: 'all',
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
  methods: {
    myFilter(tab) {
      this.activeTabKey = tab.key;
      this.$emit('change', tab);
    },
  },
};
</script>
