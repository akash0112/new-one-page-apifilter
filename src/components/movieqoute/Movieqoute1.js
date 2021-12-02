import { useEffect, useState } from 'react';

const Movieqoute = () => {
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
    const fetchData = async () => {
      const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
      })
      const quotes = await rawQuotes.json();
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.dialog)
      const rawCharacters = await fetch('https://the-one-api.dev/v2/movie?_id=' + quote.movie, { headers: headers })
      const characters = await rawCharacters.json();
      const character = characters.docs[0];
      setCharacter(character.name)
    };

    fetchData();
  }, []);

  return (
    <div>
      <blockquote>{quote}</blockquote>
      <cite>- {character}</cite>
    </div>

  );
}

export default Movieqoute;