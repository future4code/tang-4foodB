import React from 'react';
import { useHistory } from "react-router-dom";
import image from '../../img/image.jpg'
//import { TitleParagraph } from '../RestaurantDetailCard/styled';
import {RestContainer, StyledImage, RedTitleCard, DetailText, DetailContainer} from './styled'
import { goToRestaurant } from "../../routes/Coordinator";

export const RestaurantCard = () => {
    const history = useHistory();
    
     return (
            <RestContainer onClick={() => {goToRestaurant(history,"teste")}}>
               <StyledImage src={image}/>
                <RedTitleCard>Bullguer Vila Madalena</RedTitleCard>
                <DetailContainer>
                    <DetailText>50 - 60 min</DetailText>
                    <DetailText>Frete R$6,99</DetailText>
                </DetailContainer>
            </RestContainer>
        
    )
}