const containerElement = document.querySelector('.container');

const btnElement = document.createElement('div');
btnElement.className = "container__btn";

const btnAddElement = document.createElement('button');
btnAddElement.textContent = "Добавить отзыв";
btnAddElement.className = "container__btn-add";

const btnViewElement = document.createElement('button');
btnViewElement.textContent = "Просмотреть отзывы";
btnViewElement.className = "container__btn-view";

const contentElement = document.createElement('div');
contentElement.className = "container__content";

const contentAddElememt = document.createElement('div');
contentAddElememt.className = "container__content-add";

const contentViewElement = document.createElement('div');
contentViewElement.className = "container__content-view";

containerElement.appendChild(btnElement);
btnElement.appendChild(btnAddElement);
btnElement.appendChild(btnViewElement);

contentElement.appendChild(contentAddElememt);
contentElement.appendChild(contentViewElement);
containerElement.appendChild(contentElement);