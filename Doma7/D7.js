// - Динамично пополнување на табела со книги со можност за бришење на секоја книга одделно

let bookList = [];

function addBook() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;


  if (title && author && year) {
    const book = { title, author, year };
    bookList.push(book);
    displayBooks();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
  } else {
    alert("Внесете Наслов, Автор и Година");
  }
}

function deleteBook(index) {
  bookList.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  const tableBody = document.getElementById('bookList');
  tableBody.innerHTML = '';
  bookList.forEach((book, index) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = book.title;
    cell2.textContent = book.author;
    cell3.textContent = book.year;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Избриши';
    deleteButton.onclick = function () {
      deleteBook(index);
    };

    cell4.appendChild(deleteButton);
  });
}

