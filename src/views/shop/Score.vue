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
        <div class="main__points-wrapper">
            <div class="main__points-item">
                <div class="main__points-header">Выступление на конференциях</div>
                <div class="main__points-sum">90 баллов</div>
                <p class="main__points-descr">
                  Стань спикером на международной конференции по своему направлению</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Выступление на meetup</div>
                <div class="main__points-sum">60 баллов</div>
                <p class="main__points-descr">
                  Стань спикером в Колёсах и на meetup других компаний.
                  Расскажи о наших продуктах и технологиях которые мы используем</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Статья на habr/vc.ru/rusbase</div>
                <div class="main__points-sum">60 баллов</div>
                <p class="main__points-descr">Подготовь качественный контент,
                  напиши и опубликуй статью на профильную тему</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">
                  Мастер-классы, тренинги, лекции, подкасты, прямые эфиры</div>
                <div class="main__points-sum">60 баллов</div>
                <p class="main__points-descr">
                  Поделись профессиональными знаниями с коллегами.
                  Важно обучить не менее 6 человек</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Организация мероприятия</div>
                <div class="main__points-sum">60 баллов</div>
                <p class="main__points-descr">Организуй турнир по командным играм в офисе.
                  ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Стань ментором в проекте «Kolesa Academy»</div>
                <div class="main__points-sum">90 баллов ежемесячно</div>
                <p class="main__points-descr">Стань ментором академиков,
                  поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Помощь HR team</div>
                <div class="main__points-sum">50 баллов</div>
                <p class="main__points-descr">Помоги организовать мероприятие</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Выступление на Demoday</div>
                <div class="main__points-sum">30 баллов</div>
                <p class="main__points-descr">
                  Выступи на Demoday внутри своей команды и поделись знаниями</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
            <div class="main__points-item">
                <div class="main__points-header">Другое</div>
                <p class="main__points-descr">Получай баллы если уже что-то сделано</p>
                <button class="main__btn mt-auto">Отправить заявку</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    goToShop() {
      this.$router.push({ name: 'Shop' });
    },
  },
};
</script>
<style>
</style>
