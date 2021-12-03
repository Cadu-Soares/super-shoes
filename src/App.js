import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json').then((Response) => Response.json()).then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }


  if (!data || !data.length) return null; 
  
  return (
    <div className="container">
      <div className="logo">
       <img src="./img/logo.png" alt="Logo da Super Shoes"></img>
      </div>
      <div className="carousel" ref={carousel}>

        {data.map((item) => {

          const {id, name, price, oldPrice, image} = item;
          
          return (
          <div className="item" key={id}>
           <div className="image">
            <img src={image} alt={name}></img>
           </div>
           <div className="info">
            <span className="name">{name}</span>
            <span className="oldPrice">{oldPrice}</span>
            <span className="price">{price}</span>
           </div>
          </div>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={handleLeftClick}><i className="fas fa-chevron-left" alt="botão esquerdo do carousel de itens"></i></button>
        <button onClick={handleRightClick}><i className="fas fa-chevron-right" alt="botão direito do carousel de itens"></i></button>
      </div>
    </div>
    
  );
}

export default App;
