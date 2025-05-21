// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:
// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:
// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const photoContainerEl = document.querySelector('.photo-container');
let page = 1;
let per_page = 6;
const likeDislike = 1;

async function fetchPhotos() {
    try {
        const YOUR_ACCESS_KEY = 'vzPlJmBFn5M1jxiG4MsIKyJkBoVqqr1nRnU_3qMG3Xs'
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${per_page}&client_id=${YOUR_ACCESS_KEY}`);
        const photos = await response.json();
        // console.log(photos);
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}

async function loadMorePhotos() {
    // создание контента
    const responseObj = await fetchPhotos();
    responseObj.forEach(photo => {
        photoContainerEl.insertAdjacentHTML('beforeend',`
        <div class="image_box appearance id="${photo.id}">
            <img src="${photo.urls.full}" alt="${photo.alternative_slugs.en}">
            <div class="content">
                <h4 class="author">${photo.user.name}</h4>
                <h5 class="description">${photo.alt_description}</h5>
                <h6 class="count-like">Количество лайков: <span class="num-count-like" id="${photo.id}">${photo.likes}</span></h6>
            </div>
            <div class="btn">
                <button class="btn-like" id="${photo.id}">
                <svg fill="#000000" height="30px" width="30px" version="1.1" id="XMLID_242_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="like"> <g> <path d="M20,24H0V10h8c1.1,0,2-0.8,2-1.9V0h3.1C15.3,0,17,1.8,17,4v5h7v11C24,22.2,22.2,24,20,24z M8,22h12c1.1,0,2-0.9,2-2v-9h-7 V4c0-1.1-0.8-2-1.9-2H12v6.1c0,2.2-1.8,3.9-4,3.9V22z M2,22h4V12H2V22z"></path> </g> </g> </g></svg>
                </button>
                <button class="btn-dislike" id="${photo.id}">
                <svg fill="#000000" height="30px" width="30px" version="1.1" id="XMLID_45_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="dislike"> <g id="thumb"> <path d="M14,24h-3.1C8.7,24,7,22.2,7,20v-5H0V4c0-2.2,1.8-4,4-4h20v14h-8c-1.1,0-2,0.8-2,1.9V24z M2,13h7v7c0,1.1,0.8,2,1.9,2H12 v-6.1c0-2.2,1.8-3.9,4-3.9V2H4C2.9,2,2,2.9,2,4V13z M18,12h4V2h-4V12z"></path> </g> </g> </g></svg>
                </button>
            </div>
        </div>
        `);
    });
};

// создание бесконечной прокрутки
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        page = getRandomInt(1,10);
        per_page += per_page;
        fetchPhotos();
        loadMorePhotos();
        likesAndDislikesCounter();
    }
});

// генерации случайного целого числа в нужном диапазоне
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// счетчик моих лайнов и дизлайков
function likesAndDislikesCounter() {
    setTimeout(() => {
        const clickLikeButton = document.querySelectorAll('.btn-like');
        clickLikeButton.forEach(button => {
            button.addEventListener('click', function () {
                const likeCounter = document.querySelectorAll('.num-count-like');
                likeCounter.forEach(likeCount => {
                    if(button.id === likeCount.id) {
                        const currentCounter = parseInt(likeCount.textContent);
                        if(currentCounter > 0 && !(likeCount.classList.contains("myLike"))) {
                            likeCount.textContent = currentCounter + 1;
                            likeCount.classList.add("myLike");
                            if(!button.classList.contains("myLike")) {
                                button.classList.add("myLike");
                                button.insertAdjacentHTML('beforeend',`
                                <div class="likes"> +1 </div>
                                `);
                                button.style = "opacity:1";
                            }
                        }
                    }
                });
            });
        });
        
        const disclickLikeButton = document.querySelectorAll('.btn-dislike');
        disclickLikeButton.forEach(button => {
            button.addEventListener('click', function () {
                const likeCounter = document.querySelectorAll('.num-count-like');
                likeCounter.forEach(dislikeCount => {
                    if(button.id === dislikeCount.id) {
                        const currentCounter = parseInt(dislikeCount.textContent);
                        if(currentCounter > 0 && !(dislikeCount.classList.contains("myDislike"))) {
                            dislikeCount.textContent = currentCounter - 1;
                            dislikeCount.classList.add("myDislike");
                            if(!button.classList.contains("myDislike")) {
                                button.classList.add("myDislike");
                                button.insertAdjacentHTML('beforeend',`
                                <div class="dislikes"> -1 </div>
                                `);
                                button.style = "opacity:1";
                            }
                        }
                    }
                });
            });
        });
        // console.log("Счетчик лайков готов к работе!");
    }, 1000);
}

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();
likesAndDislikesCounter();