import React from 'react';
import styled, { CardDiv, ImgURL, Imagem, Descricao, Outros } from '../Card-Cart/styled';

function CardCart() {
  return (
        <CardDiv>
            <Imagem>
                <img id='imagem' src={ImgURL}/>
            </Imagem>
            <Descricao>
                <h4 id="titulo">Hamburguer</h4>
                <p>Pão, Carne, Queijo, Cebola, Tomate, alface e molho.</p>
                <h4 id="valor">R$20,00</h4>
            </Descricao>        
            <Outros>
                <div id="quantidade">2</div>
                <button>remover</button>
            </Outros>
        </CardDiv>
  );
}

export default CardCart;
