// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

const btnAddElem = document.querySelector('.container__btn-add');
const btnViewElem = document.querySelector('.container__btn-view');
const contentElem = document.querySelector('.container__content');
const contentViewElem = document.querySelector('.container__content-view');

const contentAddElem = document.querySelector('.container__content-add');

const nameProductElem = document.createElement('input');
nameProductElem.className = 'product-name';
nameProductElem.placeholder = "Название продукта";
nameProductElem.type = "text";

const reviewProductElem = document.createElement('input');
reviewProductElem.className = 'product-review';
reviewProductElem.placeholder = "Отзыв о продукте";
reviewProductElem.type = "text";

const buttonAddReview = document.createElement('button');
buttonAddReview.className = 'product-btn';
buttonAddReview.textContent = "Добавить отзыв";

contentElem.appendChild(contentAddElem);

btnAddElem.addEventListener('click', () => {

  btnViewElem.disabled = false;
  btnAddElem.disabled = true;

  nameProductElem.placeholder = "Название продукта";
  reviewProductElem.placeholder = "Отзыв о продукте";

  if(contentViewElem) {
    contentViewElem.style = "display: none";
    contentAddElem.style = "display: flex";
  }

  contentAddElem.appendChild(nameProductElem);
  contentAddElem.appendChild(reviewProductElem);
  contentAddElem.appendChild(buttonAddReview);

});

buttonAddReview.addEventListener('click', () => {
  if(nameProductElem.value.length > 0) {
    if(reviewProductElem.value.length > 0) {
      try {
        if(!localStorage.getItem(nameProductElem.value)) {
          if(localStorage.getItem(nameProductElem.value)) {
            reviews.push(reviewProductElem.value);
            localStorage.setItem(nameProductElem.value, JSON.stringify(reviews));
          } else {
            let reviews = [];
            reviews.push(reviewProductElem.value);
            localStorage.setItem(nameProductElem.value, JSON.stringify(reviews));
          }
        } else {
          let new_reviews= JSON.parse(localStorage.getItem(nameProductElem.value));
          new_reviews.push(reviewProductElem.value);
          localStorage.setItem(nameProductElem.value, JSON.stringify(new_reviews));
        }
      } catch (error) {
        if (error instanceof DOMException && error === 22) {
          console.log('Хранилище переполнено');
        } else {
          throw new Error(error.message);
        }
      } finally {
        nameProductElem.value = "";
        reviewProductElem.value = "";
      }
    } else {
      reviewProductElem.placeholder = 'Проблема с отзывом о продукте';
    }
  } else {
    nameProductElem.placeholder = 'Проблема с названием продукта';
  }
  // localStorage.clear();
});