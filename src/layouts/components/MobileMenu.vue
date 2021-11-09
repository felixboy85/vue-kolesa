<template>
  <div class="hamburger__menu">
    <div class="hamburger__menu-wrapper">
      <div class="hamburger__menu-top">
        <div class="hamburger__menu-logo">
          <a class="hamburger__menu-logo__link" href="#"
            ><img
              class="hamburger__menu-img"
              src="@/assets/images/header_logo.svg"
              alt="Логотип"
          /></a>
        </div>
        <a class="hamburger__menu-user">
          <img
            class="hamburger__menu-ava"
            src="@/assets/images/user.png"
            alt="Аватарка"
          />
          <div class="hamburger__menu-name">
            Абдурахман <br />
            Калиакпаров
          </div>
        </a>
      </div>
      <nav class="hamburger__menu-bottom">
        <ul class="hamburger__menu-list">
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Оргсхема</a>
          </li>
          <li class="hamburger__menu-item">
            <a
              class="hamburger__menu-link hamburger__menu-link--active"
              href="№"
              >Kolesa Team</a
            >
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№"
              >Kolesa <span>Shop</span></a
            >
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Картина компании</a>
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Новости</a>
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Education</a>
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Guidelines</a>
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">Библиотека</a>
          </li>
          <li class="hamburger__menu-item">
            <a class="hamburger__menu-link" href="№">FAQ</a>
          </li>
        </ul>
        <a class="hamburger__menu-exit" href="#">Выйти из профиля</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
};
</script>
