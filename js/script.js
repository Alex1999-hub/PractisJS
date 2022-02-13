'use strict';

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';

const num = 500;
box.style.width = `${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// const text = document.createTextNode('I was here');
const div = document.createElement('div');
div.classList.add('black');

// document.body.append(div);
// wrapper.append(div); // Добавляет елемент в конце
wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[0]);

// wrapper.prepend(div); // Добавляет елемент в начале

// hearts[0].after(div);
// hearts[0].before(div);

// circles[0].remove();

// hearts[1].replaceWith(circles[0]);
div.innerHTML = "Hello World!"; // Первый вариант добавления текста
// div.textContent = 'Hello world'; // Второй вариант

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');