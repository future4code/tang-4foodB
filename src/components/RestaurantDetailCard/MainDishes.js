import { AppBar } from '@material-ui/core';
import React from 'react';
import {ItemPopUp} from './ItemPopUp'
import {DishesContainer, TinyImage, TitleParagraph,  TinyDetailParagraph, TinyDiv, PriceParagraph, AddButton, RmvButton} from './styled'
import food from "../../img/food.jpg"


export const MainDishes = () => {

    return (
        <DishesContainer>
            <TinyImage src={food}/>
            <TinyDiv>
                    <TitleParagraph>Bullguer</TitleParagraph>
                {/* <ItemPopUp/> */}
                    <TinyDetailParagraph>Pão, carne, queijo, picles e molho</TinyDetailParagraph>
                <PriceParagraph>R$ 20,00</PriceParagraph>
                <AddButton>Adicionar</AddButton>
            </TinyDiv>
        </DishesContainer>
    )
}