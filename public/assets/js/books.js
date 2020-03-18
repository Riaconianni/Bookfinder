let BooksList = [];
let book;

loadPage();
$("#delBtn").on("click", delBook);
$("#addBookBtn").on("click", dispBookForm);
$("#submitBookBtn").on("click", submitNewBook);

function loadPage() {
  $.get('/api/books')
    .then(books => {
      console.log(books)
      BooksList = books;

      books.forEach(book => {
        const li = $("<li>")
        li.addClass("list-group-item")
        li.data("id", book.id)
        li.on("click", selectBook)
        li.text(book.title)
        $("#booksList").append(li)
      });
    })
    .catch(err => console.log(err))
};

function selectBook() {
  const id = $(this).data("id")
  book = BooksList.find(book => book.id === id)

  console.log(book)

  $("#bookHeader").text(book.title)
  $("#bookDesc").text(book.description)
  $('#bookAuthor').text(book.author)

  $("#listCol").addClass("col-sm-6")
  $("#bookCol").show()
  $("#addCol").hide()
};

function delBook(){
  $.ajax({
      url: "/api/books/" + book.id,
      method: "DELETE"
    })
    .then(data => {
      location.reload()
    })
    .catch(err => console.log(err))
};

function dispBookForm(){
  $("#listCol").addClass("col-sm-6")
  $("#bookCol").hide()
  $("#addCol").show()
};

function submitNewBook(){
  var description = $("#description").val()
  var author = $("#author").val()
  var title = $("#title").val()

  var newBook = {
    title: title,
    author: author,
    description: description
  }

  $.post("/api/books", newBook)
    .then(response => {
      location.reload()
    })
    .catch(err => console.log(err))
}

