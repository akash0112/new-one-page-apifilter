import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getallbooks } from "../../redux/action";
const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const a = () => {
      dispatch(getallbooks());
    };
    a();
  }, [dispatch]);
  const books = useSelector((state) => state.book.books[0]);
  console.log(books);
  return (
    <div>
      <h1>Book</h1>
      {books ? books.map((c) => <h1 key={c._id}>{c.name}</h1>) : "not found"}
    </div>
  );
};

export default Book;
