import React from 'react'
import { getBooks } from '../data/data'
import {  NavLink, Outlet } from 'react-router-dom';

const Books = () => {
    const books = getBooks();
  return (
       <div style={{ display:'flex' }}>
          <nav style={{ borderLeft:'solid 1px', padding: "1rem" }} >
              <input type="text" placeholder='جستجو کتاب' />

              <br/>
              {books.map((book) => (
                <NavLink style={({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color:isActive?"red":"black"
                  }
                  }} to={`/books/${book.number}`} key={book.number}>
                      {book.name}
                      </NavLink>
              ))}
      </nav>
      <Outlet/>
    </div>
  )
}

export default Books