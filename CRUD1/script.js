let bookForm = document.getElementById('bookForm');
let bookTbl = document.querySelector('#bookTbl tbody');
let books = [];
let editIndex = -1;


bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const author = document.getElementById('author').value;
    const date = document.getElementById('date').value;

    let emp = { name, price, author ,date}
    console.log(editIndex);

    if (editIndex == -1) {
        books.push(emp);
        console.log("new data");

    } else {
        books[editIndex] = emp;
        editIndex = -1;
    }

    console.log(books);
    renderEmpData();
    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('author').value = ''
    document.getElementById('date').value = ''
})

let renderEmpData = () => {
    bookTbl.innerHTML = '';

    books.map((value, index) => {
        let { name, price, author,date} = value;
        let empRow = document.createElement('tr');
        empRow.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${author}</td>
        <td>${date}</td>
    
        <td>
            <button style="background-color:red; padding:5px ; border-radius:7px ; font-weight:600;font-size: 20px;
" onclick="deleteData(${index})">Delete</button>
            <button style="background-color:yellow; padding:5px; border-radius:7px; font-weight:600;font-size: 20px;" onclick="editData(${index})">Edit</button>
        </td>
       `
        bookTbl.appendChild(empRow);
    })
    console.log(bookTbl);
}


function deleteData(index) {
    books.splice(index, 1);
    console.log(books);
    renderEmpData();
}

function editData(index) {
    let emp = books[index];
    console.log(emp);

    document.getElementById('name').value = emp.name;
    document.getElementById('price').value = emp.price;
    document.getElementById('author').value = emp.author;
    document.getElementById('date').value = emp.date;
  
    editIndex = index;
}