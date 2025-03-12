// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const divElDZ = document.querySelector('.dz');

initialData.forEach(e => {
  const divProduct = document.createElement('div');
  divProduct.classList = 'product';

  const nameProduct = document.createElement('h4');
  nameProduct.textContent = e.product;
  nameProduct.classList = 'product__name';

  const ulElement = document.createElement('ul');

  divProduct.appendChild(nameProduct);
  divProduct.appendChild(ulElement);

  e.reviews.forEach(element => {
    const liElement = document.createElement('li');
    liElement.textContent = element.text;
    liElement.classList = 'product__review';
    liElement.id = element.id;

    ulElement.appendChild(liElement);
  });

  const pDefault = document.createElement('p');
  pDefault.classList = 'product__default';

  const inputEl = document.createElement('input');
  inputEl.classList = 'product__input';
  inputEl.placeholder = "Напишите свой отзыв";

  const buttonEl = document.createElement('button');
  buttonEl.textContent = "Добавить";
  buttonEl.classList = 'product__btn';

  divProduct.appendChild(inputEl);
  divProduct.appendChild(buttonEl);
  divProduct.appendChild(pDefault);

  buttonEl.addEventListener('click', function (e) {
    try {
      if(inputEl.value.length < 50 || inputEl.value.length > 500) {
        let timer;
        let delay = 3;
        countdown();

        // функция обратного отсчета
        function countdown(){
          delay--;
          if (delay < 0){
            pDefault.textContent = "";
            clearTimeout(timer);
          } else {
            pDefault.textContent = "Длина введенного отзыва менее 50 или более 500 символов";
            timer = setTimeout(countdown, 1000);
          }
        }
      } else {
        const liElement = document.createElement('li');
        liElement.textContent = inputEl.value;
        liElement.classList = 'product__review';
        ulElement.appendChild(liElement);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  })

  divElDZ.appendChild(divProduct);

});