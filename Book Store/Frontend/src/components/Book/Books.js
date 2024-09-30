import React, { useEffect, useState } from "react";
import '../Book/Book.css'
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  console.log(books);

  return (
    <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '130px',width:'1120px',paddingLeft:'40px',marginBottom:'15px'}}  >
      {books &&
        books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
    </div>
         {/* Footer  */}
  <footer class="footer">
    <div class="container-fluid">
      <p class="mb-0">&copy; 2024 Bookshop. All rights reserved.</p>
    </div>
  </footer>
    </div>
  );
};

export default Books;