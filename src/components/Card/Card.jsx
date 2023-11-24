import React from "react";


const Card =({ name, type,  image, cost ,specification ,composition }) =>{
    
return (
    <div className="card">
      <img width="50" alt={name} src={image} />
      <div className='cardInfo'>
        <h2>{name}</h2>
        <ul>
            <li className="cardItem">{cost}</li>
            <li className="cardItem">{type}</li>
            <li className="cardItem">{specification}</li>
            <li className="cardItem">{composition}</li>
        </ul>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <h3 className="product-count">{count}</h3>
        <button className="product-add" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>)
}
export default Card;