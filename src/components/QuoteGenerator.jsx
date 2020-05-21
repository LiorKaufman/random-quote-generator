import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
  });

  const loadQuotes = async () => {
    const res = await axios.get(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const quotes = res.data.quotes;
    let quoteNum = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[quoteNum]);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div className='wrapper'>
      <div id='quote-box'>
        <h2 className='title'> Random Quote Generator</h2>

        <div id='text'>
          <p>{quote.quote}</p>
        </div>
        <div id='author'>
          <h4>Author: {quote.author} </h4>
        </div>

        <div className='buttons-group'>
          <button className='button' id='new-quote' onClick={loadQuotes}>
            New Quote
          </button>
          <a
            id='tweet-quote'
            href={`https://twitter.com/intent/tweet?text=${quote.quote} Author: ${quote.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-twitter fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
