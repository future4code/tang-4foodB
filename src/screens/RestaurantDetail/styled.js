import styled from 'styled-components';

/* Estilos RestaurantDetail */
export const MainDiv = styled.div`
    width: 22,5rem;
    height: fit-content;
    padding: 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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



