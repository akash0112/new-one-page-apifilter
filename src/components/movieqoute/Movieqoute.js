import React, { useEffect, useState } from "react";
import { getAllqoute } from "../../redux/service/service";
// import { getallqoutes } from "../../redux/action";
const Movieqoute = () => {
  const [quote, setQuote] = useState();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const api = await getAllqoute();
      const quotes = await api.data;
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.dialog);
      const Movies = await fetch('https://the-one-api.dev/v2/movie?_id=' + quote.movie, {headers: {'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`}})
      const movies = await Movies.json();
      const singlemovie = movies.docs[0];
      setMovie(singlemovie.name)
    };
    fetchData();
  }, []);
  return <div>
      <h1>Movies:- {movie}</h1>
      <p>Movieqoute :- {quote}</p>
  </div>;
};

export default Movieqoute;
