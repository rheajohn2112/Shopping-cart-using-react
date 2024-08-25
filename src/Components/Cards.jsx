import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom'

const Cards = ({search}) => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch('https://fakestoreapi.com/products');
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filteredCards = search
  ? cards.filter(card =>
      card.title.toLowerCase().includes(search.toLowerCase())
    )
  : cards;

  return (
    <div className='full'>
      {filteredCards.map((card) => {
        return (
          <Link className='parts' key={card.id} to={`/Describe/${card.id}`}>
            
            <div className='pic'>
            <img src={card.image}/>
            </div>
            <h1 className='heady'>{card.title}</h1>
            <p className='price'>${card.price}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;