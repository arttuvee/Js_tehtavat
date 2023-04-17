const ul = document.querySelector('#target');

const first = document.createTextNode('First item');
const second = document.createTextNode('Second item');
const third = document.createTextNode('Third item');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li2.className = 'my-item';

li1.appendChild(first);
li2.appendChild(second);
li3.appendChild(third);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);