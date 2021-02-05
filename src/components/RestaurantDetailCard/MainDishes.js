import React, {useState} from 'react';
import {DishesContainer, TinyImage, TitleParagraph,  TinyDetailParagraph, TinyDiv, PriceParagraph, AddButton} from './styled'
import PopUp from '../PopUp/PopUp'
import { ChooseQuantity } from '../ChooseQuantity/ChooseQuantity';

export const MainDishes = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    return (
        <DishesContainer>
            <chooseQuantity/>
            <TinyImage src={props.photo}/>
            <TinyDiv>
                    <TitleParagraph>{props.name}</TitleParagraph>
                {/* <ItemPopUp/> */}
                    <TinyDetailParagraph>{props.description}</TinyDetailParagraph>
                <PriceParagraph>{`R$ ${props.price}`}</PriceParagraph>
                <AddButton onClick={()=> setOpenPopup(true)}>Adicionar</AddButton>
            </TinyDiv>
        <PopUp 
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}>
        <ChooseQuantity/>
        </PopUp>
        </DishesContainer>
        
    )
}