import React from 'react';
import {DishesContainer, TinyImage, TitleParagraph,  TinyDetailParagraph, TinyDiv, PriceParagraph, RmvButton} from './styled'
import food from "../../img/food.jpg"


export const SideDishes = () => {

    return (
        <DishesContainer>
            <TinyImage src={food}/>
            <TinyDiv>
                <TitleParagraph>Cheese Fries</TitleParagraph>
                <TinyDetailParagraph>Pão, carne, queijo, picles e molho</TinyDetailParagraph>
                <PriceParagraph>R$ 20,00</PriceParagraph>
                <RmvButton>Remover</RmvButton>
            </TinyDiv>
        </DishesContainer>
    )
}