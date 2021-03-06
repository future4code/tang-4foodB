import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import { EnderecoDiv, InfoDiv, ItensCarrinho, Carrinho, Estabelecimento } from '../Cart/styled';
import CardCart from '../../components/CardCart/CardCart';
import { TopBar } from '../../components/TopBar/TopBar';
import useProtected from '../../hooks/useProtected';
import {BottomBar} from '../../components/BottomBar/BottomBar';

function Cart() {
  useProtected();
  
  return (
    <Carrinho>
      <TopBar />
      <EnderecoDiv>
          <p id="titulo">Endereço de Entrega</p>
          <p id="endereco">Rua Alessandra Vieira, 42</p>
      </EnderecoDiv>

      <Estabelecimento>
          <p id="nomeestabelecimento">Bullguer Vila Madalena</p>
          <p id="info">R. Fradique Coutinho, 1136 - Vila Madalena</p>
          <p id="info">30 - 40 min</p> 
      </Estabelecimento>

      <ItensCarrinho>
          {/* Carrinho vazio */}
          <CardCart/>
          <CardCart/>
      </ItensCarrinho>

      <InfoDiv>
          <p id="frete">Frete R$0,00</p>
          <div id="subtotal">
             <h3>SUBTOTAL</h3>
             <h3 id="valor">R$00,00</h3>
          </div>          
        <FormControl component="fieldset" >
            <FormLabel component="legend" id="label">Forma de Pagamento</FormLabel>
            <Divider/>
            <RadioGroup aria-label="pagamento" name="pagamento">
                <FormControlLabel 
                value="Dinheiro" 
                control={<Radio color="primary" />} 
                label="Dinheiro"/>
                <FormControlLabel 
                value="Cartão" 
                control={<Radio color="primary" />} 
                label="Cartão de Crédito"/>
            </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary">Confirmar</Button>
      </InfoDiv>
      <BottomBar/>  
    </Carrinho>
  );
}

export default Cart;
