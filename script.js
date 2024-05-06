// script.js
const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
