import React from 'react';
import {CardDiv} from './styled';

function CardOrderHistory(props) {


  return (
        <CardDiv>
            <div>
                <h4 id="titulo">{props.order.restaurantName}</h4>
                <p>{props.order.createdAt}</p>
                <h4 id="valor">SUBTOTAL: R${props.order.totalPrice}</h4>
            </div>        
        </CardDiv>
  );
}

export default CardOrderHistory;
