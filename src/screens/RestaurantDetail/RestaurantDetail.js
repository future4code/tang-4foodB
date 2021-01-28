import { AppBar } from '@material-ui/core';
import React from 'react';
import {SideDishes} from '../../components/RestaurantDetailCard/SideDishes'
import {MainDishes} from '../../components/RestaurantDetailCard/MainDishes'
import { MainDiv, RestaurantContainer, DetailParagraphContainer, ExtrasContainer, FirstImage, DetailParagraph, DetailAdress, TitleParagraph, SecondTitleParagraph} from './styled'
import image from "../../img/image.jpg"


export const RestaurantDetail = () => {

    return (
        <MainDiv>
            <RestaurantContainer>
                <FirstImage src={image}/>
                <TitleParagraph>Bullguer Vila Madalena</TitleParagraph>
                <DetailParagraph>Burger</DetailParagraph>
                <DetailParagraphContainer>
                    <DetailParagraph>50 - 60 min</DetailParagraph>
                    <DetailParagraph>Frete R$5,99</DetailParagraph>
                </DetailParagraphContainer>
                <DetailAdress>R. Fradique Coutinho, 1136 - Vila Madalena</DetailAdress>
                <SecondTitleParagraph>Principais</SecondTitleParagraph>
                    <ExtrasContainer>
                        <MainDishes/>
                    </ExtrasContainer>
                <SecondTitleParagraph>Acompanhamento</SecondTitleParagraph>
                    <ExtrasContainer>
                        <SideDishes/>        
                    </ExtrasContainer>
            </RestaurantContainer>
        </MainDiv>
    )
}