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
    console.log(produtos)
    // filtros
    const filterAcompanhamento = produtos && produtos.filter((item) => {
        return item.category === "Acompanhamento"
    })
    const filterBebida = produtos && produtos.filter((item) => {
        return item.category === "Bebida"
    })
    const filterSalgado = produtos && produtos.filter((item) => {
        return item.category === "Salgado"
    })
    const filterPizza = produtos && produtos.filter((item) => {
        return item.category === "Pizza"
    })
    const filterPastel = produtos && produtos.filter((item) => {
        return item.category === "Pastel"
    })

    // Renderização dos arrays dos filtros
   const renderAcompanhamento = filterAcompanhamento && filterAcompanhamento.map((item) => {
        return <MainDishes key={item.id}
                photo={item.photoUrl}
                name={item.name}
                description={item.description}
                price={item.price}
        />
    }) 
    const renderBebida = filterBebida && filterBebida.map((item) => {
        return <MainDishes key={item.id}
                photo={item.photoUrl}
                name={item.name}
                description={item.description}
                price={item.price}
        />
    }) 
    const renderSalgado = filterSalgado && filterSalgado.map((item) => {
        return <MainDishes key={item.id}
                photo={item.photoUrl}
                name={item.name}
                description={item.description}
                price={item.price}
        />
    }) 
    const renderPizza = filterPizza && filterPizza.map((item) => {
        return <MainDishes key={item.id}
                photo={item.photoUrl}
                name={item.name}
                description={item.description}
                price={item.price}
        />
    }) 
    const renderPastel = filterPastel && filterPastel.map((item) => {
        return <MainDishes key={item.id}
                photo={item.photoUrl}
                name={item.name}
                description={item.description}
                price={item.price}
        />
    }) 

    
   

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
               
                <SecondTitleParagraph>Pizza</SecondTitleParagraph>
                <ExtrasContainer>
                  {renderPizza} 
                </ExtrasContainer>
                <SecondTitleParagraph>Pastel</SecondTitleParagraph>
                <ExtrasContainer>
                  {renderPastel}
                </ExtrasContainer>
                <SecondTitleParagraph>Salgados</SecondTitleParagraph>
                <ExtrasContainer>
                  {renderSalgado}
                </ExtrasContainer>
                <SecondTitleParagraph>Acompanhamento</SecondTitleParagraph>
                <ExtrasContainer>
                   {renderAcompanhamento}
                </ExtrasContainer>
                <SecondTitleParagraph>Bebidas</SecondTitleParagraph>
                <ExtrasContainer>
                  {renderBebida}
                </ExtrasContainer>
               
                {/* termina aqui */}
            </RestaurantContainer>
            <BottomBar />
        </MainDiv>
    )
}