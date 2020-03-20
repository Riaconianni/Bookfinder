let BooksList = [];
let book;

// get auth token from localstorage on load
const token = localStorage.getItem('token');

// if there's no token in localStorage, send user back to home page to log in
if (!token) {
  location.replace('/');
}

loadPage();
$('#delBtn').on('click', delBook);
$('#addBookBtn').on('click', dispBookForm);
$('#submitBookBtn').on('click', submitNewBook);

function loadPage() {
  $.ajax({
    method: 'GET',
    url: '/api/books/userbooks',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(books => {
      // if there's no books in your list yet, let user know they need to add some
      if (books.length === 0) {
        $('#bookList').html('<h2>No books in your list yet, add one!</h2>');
      }

      console.log(books);
      BooksList = books;

      books.forEach(book => {
        const li = $('<li>');
        li.addClass('list-group-item');
        li.data('id', book.id);
        li.on('click', selectBook);
        li.text(book.title);
        $('#booksList').append(li);
      });
    })
    .catch(err => {
      console.log(err);
      // if there's err (db issue or auth issue, send user back to homepage)
      location.replace('/');
    });
}

function selectBook() {
  const id = $(this).data('id');
  book = BooksList.find(book => book.id === id);

  console.log(book);

  $('#bookHeader').text(book.title);
  $('#bookDesc').text(book.description);
  $('#bookAuthor').text(book.author);

  $('#listCol').addClass('col-sm-6');
  $('#bookCol').show();
  $('#addCol').hide();
}

function delBook() {
  $.ajax({
    url: '/api/books/' + book.id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => {
      location.reload();
    })
    .catch(err => console.log(err));
}

function dispBookForm() {
  $('#listCol').addClass('col-sm-6');
  $('#bookCol').hide();
  $('#addCol').show();
}

function submitNewBook() {
  var description = $('#description').val();
  var author = $('#author').val();
  var title = $('#title').val();

  var newBook = {
    title: title,
    author: author,
    description: description
  };

  $.ajax({
    url: '/api/books',
    method: 'POST',
    data: newBook,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      location.reload();
    })
    .catch(err => console.log(err));
}
