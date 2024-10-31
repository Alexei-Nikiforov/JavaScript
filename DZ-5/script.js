function AddProducts(products) {
    const productElement = document.getElementById('product-list');

    products.forEach(element => {
        const liElement = document.createElement('li');
        liElement.className = 'product-list__item';

        const imgElement = document.createElement('img');
        imgElement.className = 'product-list__img';
        imgElement.src = element.image;
        imgElement.alt = element.title;
        imgElement.width = 100;
        imgElement.height = 100;

        const titleElement = document.createElement('h2');
        titleElement.className = 'product-list__title';
        titleElement.textContent = element.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'product-list__description';
        descriptionElement.textContent = element.description;

        const priceElement = document.createElement('p');
        priceElement.className = 'product-list__price';
        priceElement.textContent = element.price;

        const buttonElement = document.createElement('button');
        buttonElement.className = 'product-list__button';
        buttonElement.textContent = 'Add to Cart';


        liElement.append(imgElement, titleElement, descriptionElement, priceElement, buttonElement);

        productElement.append(liElement);

    });
}