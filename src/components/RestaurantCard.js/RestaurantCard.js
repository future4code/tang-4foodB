import React from 'react';
import { useHistory } from "react-router-dom";
import {RestContainer, StyledImage, RedTitleCard, DetailText, DetailContainer} from './styled'
import { goToRestaurant } from "../../routes/Coordinator";

export const RestaurantCard = (props) => {
    const history = useHistory();
    
     return (
            <RestContainer onClick={() => {goToRestaurant(history,props.rest.id)}}>
               <StyledImage src={props.rest.logoUrl}/>
                <RedTitleCard>{props.rest.name}</RedTitleCard>
                <DetailContainer>
                    <DetailText>{props.rest.deliveryTime} min</DetailText>
                    <DetailText>Frete R${props.rest.shipping}</DetailText>
                </DetailContainer>
            </RestContainer>
        
    )
}