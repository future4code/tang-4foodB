import styled from "styled-components";

export const Carrinho = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
`
export const EnderecoDiv = styled.div`
    background-color: #eeeeee;
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    p {
        margin: 10px 20px 5px 10px;
    };
    p#titulo {
        color: lightgrey;
        font-weight: bold;
        margin-left: 15px;
    };
    p#endereco {
        color: black;
        font-weight: bold;
        margin-left: 15px;
        margin-top: 2px;
    };
    position: fixed;
`
export const Estabelecimento = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    margin-bottom: 5px;
    margin-left: 10px;
    p {
        margin: 0 25px 5px 10px;
    }
    #nomeestabelecimento {
        color: #f44336;
        font-weight: bold;
    }
    #info {
        color: lightgrey;
    }
    position: fixed;
`
export const ItensCarrinho = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
`
export const InfoDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px; 
    button {
        background-color: #f44336;
        color: black;
        width: 90vw;
        height: 6vh;
    }
    #frete {
        display: flex;
        align-self: flex-end;
        margin-right: 40px;
    }
    #subtotal {
        display: flex;
        justify-content: space-between;
        margin-right: 40px;
        margin-bottom: 10px;
    }
    #valor {
        color: red;
    }
    #label {
        color: black;
        margin-bottom: 10px;
    }
    
`



