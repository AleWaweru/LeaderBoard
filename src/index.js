import './style.css';
import addFunction from './module/add.js';
import displayScores from './module/display.js';

const form = document.getElementById('form');
const refresh = document.getElementById('reflesh');

// form event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addFunction();
});

// Display event handling

displayScores();

refresh.addEventListener('click', () => {
  displayScores();
});

window.addEventListener('load', () => {
  displayScores();
});
