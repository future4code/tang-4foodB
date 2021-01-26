import { AppBar } from '@material-ui/core';
import React from 'react';
import {DishesContainer, TinyImage, TitleParagraph,  TinyDetailParagraph, TinyDiv, PriceParagraph, AddButton, RmvButton} from './styled'
import food from "../../img/food.jpg"
import App from '../../App';


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