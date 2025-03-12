// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const btnViewEl = document.querySelector('.container__btn-view');
const btnAddEl = document.querySelector('.container__btn-add');
const contentEl = document.querySelector('.container__content');
const contentAddEl = document.querySelector('.container__content-add');
const contentViewEl = document.querySelector('.container__content-view');

const divProductEl = document.createElement('div');
divProductEl.className = 'view__product';

contentViewEl.appendChild(divProductEl);

function fetchProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.length > 0
      ? resolve(localStorage)
      : reject("Хранилище пустое");
    }, 500);
  });
}

btnViewEl.addEventListener('click', () => {

  fetchProduct()
  .finally(() => {
    btnViewEl.disabled = true;
    btnAddEl.disabled = false;

    if(contentAddEl) {
      contentAddEl.style = "display: none";
      contentViewEl.style = "display: flex";
      if(divProductEl) {
        divProductEl.textContent = "";
      }
    }
  })
  .then((result) => {

    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        let flag = true;

        const divProductNameEl = document.createElement('h3');
        divProductNameEl.className = 'view-product__name';
        divProductNameEl.textContent = `↪ ${key}`;

        divProductNameEl.addEventListener('click', () => {
          divProductNameEl.textContent = `⤵ ${key}`
          divProductNameEl.style = "font-style: italic";
          let reviews = [];

          if(flag) {

            for (let i = 0; i < JSON.parse(result[key]).length; i++) {
              reviews.push(JSON.parse(result[key])[i]);

              const pProductReviewEl = document.createElement('p');
              pProductReviewEl.className = 'view-product__review';
              pProductReviewEl.textContent = `„ ${JSON.parse(result[key])[i]} “`;

              const buttonProductReviewEl = document.createElement('button');
              buttonProductReviewEl.className = 'view-product__review-button';
              buttonProductReviewEl.textContent = 'Удалить отзыв';

              pProductReviewEl.appendChild(buttonProductReviewEl);
              divProductNameEl.appendChild(pProductReviewEl);

              buttonProductReviewEl.addEventListener('click', () => {
                try {
                  reviews.splice(i, 1);
                  localStorage.setItem(key, JSON.stringify(reviews));
                } catch (error) {
                  throw new Error(err.message);
                } finally {
                  divProductNameEl.click();
                }
              });
            }

            flag = false;
          } else {
            divProductNameEl.innerHTML = `↪ ${key}`;
            divProductNameEl.style = "font-style: normal";
            flag = true;
          }

        });

        divProductEl.appendChild(divProductNameEl);
      }
    }
  }).catch((err) => {
    throw new Error(err.message);
  });
});