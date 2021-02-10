import React from 'react';
import {CardDiv} from './styled';

function CardOrderHistory(props) {

  const timeStamp = props.order.createdAt
  const milliseconds = timeStamp * 1000
  const dateObject = new Date(milliseconds)

  const dataLegivel = dateObject.toLocaleString("pt-BR", {day: 'numeric', month: 'long'})


  return (
        <CardDiv>
            <div>
                <h4 id="titulo">{props.order.restaurantName}</h4>
                <p>{dataLegivel}</p>
                <h4 id="valor">SUBTOTAL: R$ {props.order.totalPrice}</h4>
            </div>        
        </CardDiv>
  );
}

export default CardOrderHistory;
