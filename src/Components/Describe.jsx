import React from 'react';
import './Describe.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Describe = ({ addToCart }) => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  
  const fetchData = async () => {
    let a = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await a.json();
    setCards(data);
    console.log(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='center-wrapper'>
      <div className='container'>
        <div className='imagediv'>
          <img className="desim" src={cards.image} alt={cards.title} />
        </div>
        <h1 className='tit'>{cards.title}</h1>
        <p className='pri'>${cards.price}</p>
        <p className='des'>{cards.description}</p>
        <div className='butt'>
          <button className='add' onClick={() => addToCart(cards)}>Add Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Describe;
