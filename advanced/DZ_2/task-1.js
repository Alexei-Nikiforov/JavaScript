// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  // Приватное свойство для хранения списка книг
  #books = [];

  // геттер allBooks
  get allBooks() {
    return this.#books;
  }

  // конструктор с начальным списком книг
  constructor(books) {
    if(Array.isArray(books)) {
      if(books.length === Array.from(new Set(books)).length) {
        this.#books = books;
      } else {
        throw new Error (`В текущем списке книг ${books} есть дубликаты`)
      }
    } else {
      throw new Error (`Hачальный список книг ${books} должен быть массивом`)
    }
  }

  // Метод для получения информации о наличии книги
  hasBook(title) {
    if (this.#books.includes(title)) {
      return true;
    } else {
      return false;
    }
  }

  // Метод для добавления книги
  addBook(title) {
    if(this.hasBook(title)) {
      throw new Error (`Kнига ${title} с таким названием уже существует`)
    }
    this.#books.unshift(title);
  }

  // Метод для удаления книги
  removeBook(title) {
    if(!this.hasBook(title)) {
      throw new Error (`Kниги ${title} с таким названием нет в списке`)
    }
    this.#books.splice(this.#books.indexOf(title),1);
  }
}



let library = new Library(['Book_1', 'Book_2', 'Book_3']);
console.log(library);
// let Library1 = new Library(['Book_1', 'Book_2', 'Book_1']);
// console.log(Library1);
// const Library2 = new Library('Book_1');
// console.log(Library2);

library.addBook('Book_4');
console.log(library);
// library.addBook('Book_4');
// console.log(library);

library.removeBook('Book_2');
console.log(library);
// library.removeBook('Book_5');
// console.log(library);

console.log(library.hasBook('Book_1'));
console.log(library.hasBook('Book_2'));