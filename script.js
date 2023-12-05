//Переменные 
let brand = document.querySelector('.main_content_brand');
let model = document.querySelector('.main_content_model');
let year = document.querySelector('.main_content_year');
let probeg = document.querySelector('.main_content_probeg');
let color = document.querySelector('.main_content_color');
let info = document.querySelector('.main_content_info');
let span = document.querySelector('.main_content_span');


//Бренд
function brand1() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        Great Wall
    </span>
    `);
}
brand.addEventListener("click", brand1);


//Модель
function brand2() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        Hover H5
    </span>
    `);
}
model.addEventListener("click", brand2);


//Год
function brand3() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        2011 г.
    </span>
    `);
}
year.addEventListener("click", brand3);


//Пробег
function brand4() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        90000 км
    </span>
    `);
}
probeg.addEventListener("click", brand4);


//Цвет
function brand5() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        Чёрный
    </span>
    `);
}
color.addEventListener("click", brand5);


//Полная информация
function brand6() {
    span.insertAdjacentHTML('beforeend', `
    <br>
    <span class="main_content_span">
        Классная машина
    </span>
    `);
}
info.addEventListener("click", brand6);