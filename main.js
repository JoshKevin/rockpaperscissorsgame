const result = document.querySelector('#result');
result.style.display = 'none';

const choices = document.querySelector('#choices');
choices.style.display = 'none';

const startbtn = document.querySelector('#startbtn');
const hidden = document.querySelectorAll('.hidden');
startbtn.addEventListener('click', () => {
    startbtn.style.display = 'none';
    hidden.forEach((hidden) => {
        hidden.style.display = 'block';
    });
});

