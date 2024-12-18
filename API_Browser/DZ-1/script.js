// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

import { training } from './data.js';

let groupTraining = JSON.parse(training);

const rowEl = document.querySelector('.row');

function renderGroupTraining(groupTraining) {

    groupTraining.forEach(element => {
        rowEl.insertAdjacentHTML('beforeend',`
        <div class="feature col">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </div>
                <h3 class="fs-2 text-body-emphasis">${element.name}</h3>
                <p>Время занятий: ${element.time}</p>
                <p>${element.description}</p>
                <p>Максимальное кол-во участников: <span>${element.max_number}</span></p>
                <p data-id=${element.id}>Текущее кол-во участников: <span>${element.current_quantity}</span></p>
                <a href="#" class="btn btn-outline-secondary" id="${element.id}">Записаться</a>
                <a href="#" class="btn btn-danger rounded-pill px-3 pe-none" id="${element.id}">Отменить запись</a>
            </div>
        `);

        if (Number(element.max_number) === Number(element.current_quantity)) {
            const linkEl = document.getElementById(`${element.id}`);
            linkEl.classList.add('pe-none');
        }
    });
}

renderGroupTraining(groupTraining);

rowEl.addEventListener('click', function (e) {

    if(e.target.classList.contains('btn-outline-secondary')) {

        const currentQuantityEl = document.querySelector(`[data-id="${e.target.id}"]`);
        const spanEl = currentQuantityEl.querySelector('span');
        spanEl.textContent = +(groupTraining[e.target.id - 1].current_quantity) + 1;
        spanEl.classList.add(`cancel_entries_${e.target.id}`);

        const linkEl = document.getElementById(`${e.target.id}`);
        linkEl.classList.add('pe-none');
        linkEl.classList.add(`active_link_${e.target.id}`);
        linkEl.nextElementSibling.classList.remove('pe-none');

        e.preventDefault();
        
    }
    if(e.target.classList.contains('btn-danger')) {

        const spanElem = document.querySelector(`.cancel_entries_${e.target.id}`);
        spanElem.textContent = +(spanElem.textContent) - 1;
        spanElem.classList.remove(`cancel_entries_${e.target.id}`);

        const linkElem = document.querySelector(`.active_link_${e.target.id}`);
        linkElem.classList.remove('pe-none');
        linkElem.classList.remove(`.active_link_${e.target.id}`);
        linkElem.nextElementSibling.classList.add('pe-none');

        e.preventDefault();
    }
});