class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

    static validate(title,author,isbn){
        return !(title==='' || author==='' || isbn === '')
    }
}

class UI{
    constructor(){
        this.bookListUi = document.getElementById('book-list');
    }

    addBookToList(book){
        const row = document.createElement('tr');
        row.innerHTML=`<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a class='delete' href='#' class='delete' >X</a></td>`;
        
        this.bookListUi.appendChild(row);
        this.clearFields();
    }

    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value=''; 
       }

    showAlert(msg,className){
        let div = document.createElement('div');
        div.className = className;
        div.innerText = msg;
        let form  =  document.getElementById('book-form');
        let container = document.querySelector('.container');

        container.insertBefore(div,form);

        setTimeout(function(){
            div.remove();
        },3000);
    
    }
    
}

class Store{

    static getBooksFromLocalStorage(){
        let books;
        if(localStorage.getItem('books') === null)
            books=[];
        else
            books = JSON.parse(localStorage.getItem('books'));

        return books;
    }

    static displayBook(){
        const books = this.getBooksFromLocalStorage();
        books.forEach(book => {
            const ui = new UI();
            ui.addBookToList(book);
        });
    }

    static addBook(book){
        const books = Store.getBooksFromLocalStorage();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = this.getBooksFromLocalStorage();
        books.forEach(function(book,index){
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
    
}

document.addEventListener('DOMContentLoaded',function(){
    Store.displayBook();
});

document.getElementById('book-form').addEventListener('submit',function(e){

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    let book = new Book(title,author,isbn);
    
    var ui = new UI();
    if(Book.validate(title,author,isbn))
    {
        let book = new Book(title,author,isbn);
        ui.showAlert(`book add successfily`,'success');
        ui.addBookToList(book);
        Store.addBook(book);
    }
    else{
        ui.showAlert(`Enter valid fields`,'error');
    }
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){
    if(e.target.className === 'delete'){
        (e.target).parentElement.parentElement.remove();
        let ui = new UI();
        ui.showAlert(`delete successfuly`,'success');
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }
})