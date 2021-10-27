<template>
   <div class="header__right">
              <a
                class="header__user"
                href="http://www.google.com"
                target="_blank"
              >
                <img
                  class="header__ava"
                  :src='user.avatarUrl'
                  alt="Деда Рик"
                />
                <div class="header__user-info">
                  <div class="header__username">{{user.name}}</div>
                  <div class="header__userpoints">{{user.score}} баллов</div>
                </div>
              </a>
            </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
  },
};
</script>
