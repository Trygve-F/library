let Library = [];

class Book {     
constructor(title, author, genre, progress) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.progress = progress
}};


document.getElementById('openForm').addEventListener('click', openForm);
document.getElementById('exit').addEventListener('click', closeForm);
document.getElementById('submit').addEventListener('click', (e) => {
addBookToLibrary()
clearForm()
render()
});



function addBookToLibrary() {
    let title = 'Title: ' + document.getElementById('title').value;
    let author = 'Author: ' + document.getElementById('author').value;
    let genre = 'Genre: ' + document.getElementById('genre').value;
    let progress = document.querySelector('input[name=progress]:checked').value;
    let newBook = new Book(title, author, genre, progress);
    Library.push(newBook);
}

function render() {
    const grid = document.getElementById('grid');

    let i = 0;
    grid.innerHTML = "";
    Library.forEach((book) => {
        const card = document.createElement('card');
        card.id = i;
        grid.appendChild(card);
        i++;

        const remove = document.createElement('input');
            remove.type = 'image';
            remove.id = 'removeButton'
            remove.value = 'Remove'
            remove.src = "./images/close.png"
            remove.onclick = removeBook;
            card.appendChild(remove)

        Object.keys(book).forEach((prop) => {
        if (prop != 'progress') {
        const div = document.createElement('div');
            div.textContent = book[prop];
            card.appendChild(div);
        } else {
        const progressbutton = document.createElement('input');
            progressbutton.type = 'button';
            progressbutton.id = 'progressButton'
            progressbutton.value = book[prop]
            progressbutton.className = book[prop];
            progressbutton.onclick = changeProgress;
            card.appendChild(progressbutton)
        }
        })
    })
}

function removeBook() {
    let id = this.parentElement.id
    Library.splice(id, 1)
    this.parentElement.remove();
    render();
    };

function changeProgress() {
    progressbutton = this;
    switch (true) {
    case progressbutton.className == "notStarted":
        progressbutton.className = "inProgress";
        progressbutton.value = "In Progress"
        break;

    case progressbutton.className == "inProgress":
        progressbutton.className = "finished";
        progressbutton.value = "Finished"
        break;

    case progressbutton.className == "finished":
        progressbutton.className = "notStarted";
        progressbutton.value = "Not Started"
    }
}


function openForm() {
    document.getElementById('popupForm').style.display = "block";
};

function closeForm() {
    document.getElementById('popupForm').style.display = "none"
};

function clearForm() {
    title.value = "";
    author.value = "";
    genre.value = "";
};

render();

