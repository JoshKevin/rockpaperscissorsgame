const startbtn = document.querySelector('#startbtn');
const hidden = document.querySelectorAll('.hidden');
startbtn.addEventListener('click', () => {
    startbtn.style.display = 'none';
    hidden.forEach((hidden) => {
        hidden.style.display = 'block';
    });
});
