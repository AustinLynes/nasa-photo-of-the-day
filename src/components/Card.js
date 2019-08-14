import React from 'react';
function Card(props) {
   
  return (
    <div className={props.cardName}>
      <img id='POD' src={props.pod} alt="pic of the Day!" />
    </div>
  );
}

export default Card;
