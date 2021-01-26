import React from 'react';
import {IconImg, MainDiv, Paragraph1, Paragraph2, Paragraph3} from './styled'
import clock from '../../img/clock.png'


export const OrderInProgress = () => {

    return (
        <MainDiv>
            <IconImg src={clock}/>
            <div>
                <Paragraph1>Pedido em Andamento</Paragraph1>
                <Paragraph2>Nome do Restaurante</Paragraph2>
                <Paragraph3><strong>SUBTOTAL R$Total Carrinho</strong></Paragraph3>
            </div>
        </MainDiv>
    )
}