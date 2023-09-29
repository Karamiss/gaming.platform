const text = document.querySelector('.description-title', '.');
const colors = ['#E87D0E',  '#A319A3']; // список цветов, которые будут сменяться
let currentIndex = 0;

function changeTextColor() {
    text.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeTextColor, 2000); // вызываем функцию снова через 2 секунды
}

changeTextColor(); // начинаем анимацию при загрузке страницы
