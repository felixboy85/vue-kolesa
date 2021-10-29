<template>
    <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <div class="footer__left">
              <div class="footer__copyright">© Kolesa Group</div>
              <div class="footer__social">
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="@/assets/images/instagram.svg"
                    alt="Инстаграм"
                /></a>
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="@/assets/images/youtube.svg"
                    alt="Ютюб"
                /></a>
                <a class="footer__social-link" href="#"
                  ><img
                    class="footer__social-img"
                    src="@/assets/images/vk.svg"
                    alt="Вконтакте"
                /></a>
              </div>
            </div>
            <div class="footer__right">
              <div class="footer__text">
                <a class="footer__descr">Есть идеи что улучшить?</a>
                <a class="footer__descr">Не знаешь, с кем решить проблему?</a>
              </div>
              <button class="main__btn main__btn--white">Написать</button>
            </div>
          </div>
        </div>
      </footer>
  </template>

<script>
export default {
  name: 'Footer',
};
</script>
