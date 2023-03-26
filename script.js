const createCard = document.querySelector(".create");
const bookInfo = document.querySelector("#info");
const closeBtn = document.querySelector(".btn-close");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const card = document.querySelector(".card");
const storage = document.querySelector(".storage");
const readButton = document.querySelector(".read-button");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const pagesInput = document.querySelector(".pages");
let myLibrary = [];
function Books(title, author, pages, read) {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
//button changing from read to unread

Books.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();

  render();
}
//adding book function
function addBookToLibrary() {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector(".checkbox").checked;
  let newBook = new Books(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}
//submit button
submit.addEventListener("click", function (event) {
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value == ""
  ) {
  } else {
    addBookToLibrary();
    event.preventDefault();
    form.reset();
  }
});

//UI

//make card invisible
createCard.addEventListener("click", function () {
  bookInfo.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  bookInfo.style.display = "none";
});

//show card
//looping to show book in array
//render function display it to html
function render() {
  card.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<div class="card1">
    <h4>${book.title}</h4> 
    <h3>${book.author}</h4> 
    <h4>${book.pages}</h4>
    <button class="read-button" onclick="toggleRead(${i})" style="background-color: ${
      book.read ? "#66FF99" : "#FFCCCB"
    }"> ${book.read ? "Read" : "Not Read"} </button>
    <button class="remove-button" onclick="removeBook(${i})">Remove</button>


    </div>`;
    card.appendChild(bookEl);
  }
}

//remove book
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
