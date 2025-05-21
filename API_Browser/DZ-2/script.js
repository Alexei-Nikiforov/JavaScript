// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:
// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const arrowLeftEl = document.querySelector('.arrow-left');
const arrowRightEl = document.querySelector('.arrow-right');
const slidesEl = document.querySelectorAll('.slider__image');
const pointsEl = document.getElementById('points');

let currentIndex = 0;
const pagination = [];

function createPagination() {
    const divEl = document.createElement('div');
    divEl.className = 'pagination';
    pointsEl.appendChild(divEl);
    pagination.push(divEl);
}

function addPagination() {
    slidesEl.forEach(createPagination);

    pagination[0].classList.add('active');

    pagination.forEach((points, index) => {
        points.addEventListener('click', function (e) {
            changeSlide(index);
        });
    });
}

function changeSlide(slideIndex) {
    slidesEl[currentIndex].classList.remove('block');
    pagination[currentIndex].classList.remove('active');

    currentIndex = slideIndex;
    
    slidesEl[currentIndex].classList.add('block');
    pagination[currentIndex].classList.add('active');
}

arrowRightEl.addEventListener('click', function (e) {
    let newIndex = currentIndex + 1;

    if(newIndex > slidesEl.length - 1) {
        newIndex = 0;
    }

    changeSlide(newIndex);
});

arrowLeftEl.addEventListener('click', function (e) {
    let newIndex = currentIndex - 1;

    if(newIndex < 0) {
        newIndex = slidesEl.length - 1;
    }

    changeSlide(newIndex);
});

addPagination();