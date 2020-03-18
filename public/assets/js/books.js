let BooksList = []

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

function selectBook() {
  const id = $(this).data("id")
  const book = BooksList.find(book => book.id === id)

  console.log(book)

  $("#bookHeader").text(book.title)
  $("#bookDesc").text(book.description)

  $("#listCol").addClass("col-sm-6")
  $("#bookCol").show()
}