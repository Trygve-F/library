let myLibrary = []
document.getElementById('submit').addEventListener('click', addBookToLibrary)
document.getElementById('newBook').addEventListener('click', addBookForm)


function Book(title, author, pages, genre, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.genre = genre
    this.status = status
}
        
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let genre = document.getElementById('genre').value;
    let status = document.querySelector('input[name=status]:checked').value;
    let newBook = new Book(title, author, pages, genre, status);
    myLibrary.push(newBook);
    updateLibrary();
    //updateLibrary();
}

/*function updateLibrary() { 
    clearCards();
    for (let i=0; i < myLibrary.length; i++) {
    const grid = document.getElementById('grid');
    const card = document.createElement('card');
    grid.appendChild(card);

    const newTitle = document.createElement('div');
    newTitle.textContent = myLibrary[i].title
    card.appendChild(newTitle);

    const newAuthor = document.createElement('div');
    newAuthor.textContent = myLibrary[i].author
    card.appendChild(newAuthor);

    const newPages = document.createElement('div');
    newPages.textContent = myLibrary[i].pages
    card.appendChild(newPages);

    const newGenre = document.createElement('div');
    newGenre.textContent = myLibrary[i].genre
    card.appendChild(newGenre);
    }
}
*/

function updateLibrary() {
    clearCards();
    myLibrary.forEach((book, index) => {
        let card = document.createElement('card');
        let grid = document.getElementById('grid')
        grid.appendChild(card)
    Object.keys(book).forEach(prop => {
        let div = document.createElement('div');
        div.textContent = book[prop];
        card.appendChild(div)
        })
    });
}

function clearCards() {
    const grid = document.getElementById("grid");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
}

function addBookForm() {
    document.getElementById('addBook').style.display = "block";
}

function closeBookForm() {
    document.getElementById('addBook').style.display = "none"
}




