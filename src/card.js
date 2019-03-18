import React from 'react';
import STORE from './store/store';


const Card = (props) => {
  //console.log(props.cardIds);
  
  const cards = props.cardIds.map((card, index) => (
    <div className="Card" key={index}>
      <h3>{STORE.allCards[card].title}</h3>
      <p>{STORE.allCards[card].content}</p>
    </div>
  ));

  //console.log(cards);
  
  return (
    <div className="List-cards">
      {cards}
    </div>
  )

}

export default Card;