// Task-1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const item in numbers) {
    if(numbers[item] >= 3) {
        console.log(numbers[item]);
    }
}

// Task-2

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Task-3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(nds => {
    nds.price *= 0.85;
});
console.log(products);

// Task-4

const product = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];
// массив продуктов, у которых есть хотя бы одна фотография, используя метод filter
console.log(product.filter(photo => photo.photos && photo.photos.length > 0));
// Отсортируйте массив по цене в порядке возрастания и выведите его в консоль
console.log(product.slice().sort((a, b) => a.price - b.price));

// Task-5

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const week = {}
if(en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        week[en[i]] = ru[i];
    }
} else {
    console.log('Массивы не равны');
}
console.log(week);