import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBoook, getBook } from "../data/data";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const book = getBook(parseInt(params.bookId));
  if (book) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>قیمت کل : {book.amount} تومان</h2>
        <p>{book.name}</p>
        <p>تاریخ انتشار : {book.due}</p>
        <p>
          <button
            onClick={() => {
              deleteBoook(book.number);
              navigate("/books" + location.search);
            }}
          >
            حذف مطلب
          </button>
        </p>
      </main>
    );
  } else {
    return (
      <main style={{ padding: "1rem" }}>
        <p>گشتم نبود نگرد نیست</p>
      </main>
    );
  }
};

export default Book;
