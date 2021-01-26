
import styled from 'styled-components';

/* Estilos ResDetailCard */
export const RestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20.5rem;
    height: 90%;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
`

export const DetailParagraphContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const ExtrasContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-top: 1.4px solid black;
    border-bottom-style: hidden;
    padding: 4px 0px;
    margin-bottom: 4px;

`


export const FirstImage = styled.img`
    width: 20.5rem;
    height: 7.5rem;
`

export const DetailParagraph = styled.p`
    width: 6.5rem;   
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #b8b8b8;
    letter-spacing: -0.39px;
    height: 1.125rem;
    margin-top: -8px;
`
export const DetailAdress = styled.p` 
    height: 1.125rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #b8b8b8;
    letter-spacing: -0.39px;
    margin-top: -8px;
`

export const TitleParagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #e8222e;
    margin-top: 4px;
    letter-spacing: -0.39px;
`

export const SecondTitleParagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #000000;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    height: 1.125rem;
    margin-bottom: 5px;
    margin-top: -2px;
`
export const StyledInput = styled.input`
    border: 2px solid black;
`

/* Estilos MainDishes e SideDishes */

export const DishesContainer = styled.div`
    width: 20.5rem;
    height: 7rem;
    margin: 0.438rem 0 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
`

export const TinyImage = styled.img`
    width: 6rem;
    border-radius: 8px 0px 0px 8px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.030rem;
`
export const TinyDetailParagraph = styled.p`
    margin-top: -8px;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`
export const PriceParagraph = styled.p`
    width: 7.375rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const TinyDiv = styled.div`
    width: 80%;
    margin-left: 4%;
    display: flex;
    border-radius: 0px 8px 8px 0px;
    flex-direction: column;
    justify-content: flex-start;
`

export const AddButton = styled.button`
    display: flex;
    align-self: flex-end;
    width: 5.625rem;
    height: 1.938rem;
    margin-top: -12%;
    padding: 0.5rem 1.281rem 0.563rem 1.344rem;
    border-radius: 8px 0px;
    border: solid 1.4px black;
    background-color: white;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;

`

export const RmvButton = styled.button`
    display: flex;
    align-self: flex-end;
    width: 5.625rem;
    height: 1.938rem;
    margin-top: -12%;
    padding: 0.5rem 1.281rem 0.563rem 1.344rem;
    border-radius: 6px 0px;
    border: solid 1.4px #e02020;
    background-color: white;
    font-family: Roboto;
    font-size: 0.75rem;
    color: #e02020;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;

`
/* Estilo Quantidade - Item PopUp */
export const StyledPopUp = styled.div`
    width: 2.063rem;
    height: 2.063rem;
    position: relative;
    margin-left: 188%;
    margin-top: -52%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px 8px;
    border: 1.4px solid #e02020;

`

