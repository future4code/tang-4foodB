import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { SideDishes } from '../../components/RestaurantDetailCard/SideDishes'
import { MainDishes } from '../../components/RestaurantDetailCard/MainDishes'
import { MainDiv, RestaurantContainer, DetailParagraphContainer, ExtrasContainer, FirstImage, DetailParagraph, DetailAdress, TitleParagraph, SecondTitleParagraph } from './styled'
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { TopBar } from '../../components/TopBar/TopBar';
import GlobalStateContext from "../../global/GlobalStateContext";


export const RestaurantDetail = () => {
    const pathParams = useParams();
    const { states, requests } = useContext(GlobalStateContext);

    useEffect(() => {
        requests.getRestaurantDetail(pathParams.id)
    }, [])

    const produtos = states.restaurant.products
    // const ordenado = produtos.sort( 
    //     (p1, p2) => {
    //         if (p1.category < p2.category) {
    //             return 1
    //         } else if (p1.category > p2.category) {
    //             return -1
    //         } else {
    //             return 0
    //         }
    //     })
     
   

    return (
        <MainDiv>
            <TopBar />
            <RestaurantContainer>
                <FirstImage src={states.restaurant.logoUrl} />
                <TitleParagraph>{states.restaurant.name}</TitleParagraph>
                <DetailParagraph>{states.restaurant.category}</DetailParagraph>
                <DetailParagraphContainer>
                    <DetailParagraph>Prazo: {states.restaurant.deliveryTime} min</DetailParagraph>
                    <DetailParagraph>Frete: R$ {states.restaurant.shipping}</DetailParagraph>
                </DetailParagraphContainer>
                <DetailAdress>{states.restaurant.address}</DetailAdress>
                {/* renderizar array states.restaurant.produtos */}
                <SecondTitleParagraph>Principais</SecondTitleParagraph>
                <ExtrasContainer>
                    {/* <MainDishes /> */}
                </ExtrasContainer>
                <SecondTitleParagraph>Acompanhamento</SecondTitleParagraph>
                <ExtrasContainer>
                    <SideDishes />
                </ExtrasContainer>
                {/* termina aqui */}
            </RestaurantContainer>
            <BottomBar />
        </MainDiv>
    )
}