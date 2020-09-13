/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;
function start() {
    let a = +prompt('Сколько фильмов уже посмотрели?', '');
    while (a == '' || a == null || isNaN(a)) {
        a = +prompt('Сколько фильмов уже посмотрели?', '');
    }
    numberOfFilms = a;
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?','');
    let b = prompt('На сколько оцените его?','5.5');

    if (a == null || b == null || a == '' || b == '' || a.length > 50 ) {
        --i;
    } else {
        personalMovieDB.movies[a] = b;
    }  
}

function rememberMyFilms() {
    for (let i = 1; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?','');
        let b = prompt('На сколько оцените его?','5.5');
    
        if (a == null || b == null || a == '' || b == '' || a.length > 50 ) {
            --i;
        } else {
            personalMovieDB.movies[a] = b;
        }  
    }  
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres.push(a);
    }
}

writeYourGenres();