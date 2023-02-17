// declaring variables
const Book = document.getElementById('book');
const Author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const showList = document.getElementById('showList');

// adding event listener
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (Book.value == '' && Author.value == '' && year.value == '') {
        alert('All fields are required');
    }
    else{
        // declaring new variables and creating elements
        const newRow = document.createElement('tr');

        // declaring new variables and creating elements and assigning values
        const newBookName = document.createElement('td');
        newBookName.textContent = Book.value;
        newRow.appendChild(newBookName);
        
        // declaring new variables and creating elements and assigning values
        const newAuthorName = document.createElement('td');
        newAuthorName.textContent = Author.value;
        newRow.appendChild(newAuthorName );

        // declaring new variables and creating elements and assigning values
        const newYear = document.createElement('td');
        newYear.textContent = year.value;
        newRow.appendChild(newYear);

        // adding new row to table
        showList.appendChild(newRow);
    }
    
    
}
);

