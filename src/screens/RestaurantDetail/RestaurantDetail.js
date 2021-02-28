import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
    const filterProdutos = produtos && produtos.filter((item) => {
        switch (item.category){
            case 'Acompanhamento':
                return item.category === "Acompanhamento"
                break;
            case 'Bebida':
                return item.category === "Bebida";
                break;
            case 'Salgado':
                return item.category === "Salgado"
                break;
            case 'Pizza': 
                return item.category === "Refeição"
                break;
            case 'Pastel':
                return item.category === "Pastel"
                break;
            case 'Refeição':
                return item.category === "Refeição"
                break;
            case 'Lanche':
                return item.category === "Lanche"
                break;
            case 'Sorvete':
                return item.category === "Sorvete"
                break;
            case 'Outros':
                return item.category === "Outros"
                break;
            case 'Doce':
                return item.category === "Doce"
                break;
            
            default: 
                console.log("entrou no default")
        }})
    

    const renderProdutos = filterProdutos && filterProdutos.map((item) => {
        return <div>
            <SecondTitleParagraph>{item.category}</SecondTitleParagraph>
            <MainDishes key={item.id}
            photo={item.photoUrl}
            name={item.name}
            description={item.description}
            price={item.price}
            />
        </div> 
                
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
               
                <SecondTitleParagraph>Produtos</SecondTitleParagraph>
                <ExtrasContainer>
                  {renderProdutos} 
                </ExtrasContainer>
                {/* termina aqui */}
            </RestaurantContainer>
            <BottomBar />
        </MainDiv>
    )
}