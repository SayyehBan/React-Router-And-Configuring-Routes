import React from 'react'
import { getBooks } from '../data/data'
import { Link } from 'react-router-dom';

const Books = () => {
    const books = getBooks();
  return (
       <div style={{ display:'flex' }}>
          <nav style={{ borderLeft:'solid 1px', padding: "1rem" }} >
              <input type="text" placeholder='جستجو کتاب' />

              <br/>
              {books.map((book) => (
                  <Link style={{display:'block'}} to={`/books/${book.number}`} key={book.number}>
                      {book.name}
                      </Link>
              ))}
         </nav>
    </div>
  )
}

export default Books