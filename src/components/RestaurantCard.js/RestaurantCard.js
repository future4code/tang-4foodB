import React from 'react';
import image from '../../img/image.jpg'
import { TitleParagraph } from '../RestaurantDetailCard/styled';
import {RestContainer, StyledImage, RedTitleCard, DetailText, DetailContainer} from './styled'


export const RestaurantCard = () => {

    return (
            <RestContainer>
               <StyledImage src={image}/>
                <RedTitleCard>Bullguer Vila Madalena</RedTitleCard>
                <DetailContainer>
                    <DetailText>50 - 60 min</DetailText>
                    <DetailText>Frete R$6,99</DetailText>
                </DetailContainer>
            </RestContainer>
        
    )
}