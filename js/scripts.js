// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.querySelector('aside');
const header = document.getElementById('page-header');
/*const sidebar = document.getElementById('sidebar');
*/

// Modify the DOM
/*
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');


newHeading.textContent = 'Article 004';
newParagraph.textContent = 'This is placeholder text for the paragraph.';
newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);
newArticle.classList.add('m-2','p-2','border','border-secondary');
newArticle.setAttribute('id','art-004');
const main = document.querySelector('main');
main.appendChild(newArticle);
*/

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'Article 004';
newParagraph.textContent = 'Hi Guys, I have the opportunity to do some freelance jobs in WordPress and I like to test first in pantheon as we learnt it in the first project';

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);
newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');
newArticle.setAttribute('id', 'art-004');

const mainContent = document.querySelector('main');

mainContent.appendChild(newArticle);


sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.classList.remove('bg-dark');
header.classList.add('bg-warning');