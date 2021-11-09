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
  model: {
    event: 'change',
    prop: 'activeTabKey',
  },
  props: {
    activeTabKey: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    myFilter(tab) {
      this.$emit('change', tab.key);
    },
  },
};
</script>
