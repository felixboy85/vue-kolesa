<template>
  <form class="header__form" action="#">
    <input
      class="header__input"
      type="text"
      placeholder="Поиск"
      :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)'
    />
    <button class="header__search">
      <img
        class="header__img"
        src="@/assets/images/search-icon.svg"
        alt="Поиск"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
    modelValue: String,
  },
};
</script>
