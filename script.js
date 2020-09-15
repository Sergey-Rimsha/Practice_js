'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let a = +prompt('Сколько фильмов уже посмотрели?', '');
        while (a == '' || a == null || isNaN(a)) {
            a = +prompt('Сколько фильмов уже посмотрели?', '');
        }
        personalMovieDB.count = a;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?','');
            let b = prompt('На сколько оцените его?','5.5');
        
            if (a == null || b == null || a == '' || b == '' || a.length > 50) {
                --i;
            } else {
                personalMovieDB.movies[a] = b;
            }  
        }  
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else {
            alert('Вы киноман');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {    
            let a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    
            while (a == null || a == '') {
                a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }
        
            personalMovieDB.genres.push(a);
        }
    
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
};

personalMovieDB.start();