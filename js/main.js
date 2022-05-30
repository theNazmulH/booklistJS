/*

*/

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const price = document.getElementById('price');
const category = document.getElementById('category');
const bookList = document.getElementById('bookList');
const btn = document.getElementById('addBook');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value === '' || author.value === '' || year.value === '' || price.value === '' || category.value === '') {
        alert('Please fill in all fields');
    } else {
        const newRow = document.createElement('tr');
        // title
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        // newAuthor
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        // newCategory
        const newCategory = document.createElement('td');
        newCategory.innerHTML = category.value;
        newRow.appendChild(newCategory);
 // YEAR
 const newYear = document.createElement('td');
 newYear.innerHTML = year.value;
 newRow.appendChild(newYear);

        // Price
        const newPrice = document.createElement('td');
        newPrice.innerHTML = price.value;
        newRow.appendChild(newPrice);
       

        bookList.appendChild(newRow);

    }
});