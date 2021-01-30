// import { AppBar } from '@material-ui/core';
import React from 'react';
import {ContainerProfile, TitlePerfil, RegisterAdress,BarProfile, DataUser, ImgEdit1,ImgEdit2, Requests, LineBlack} from './styled';
import  botaoEditar from '../../img/botaoEditar.png';
import { TopBar } from '../../components/TopBar/TopBar';

export const Profile = () => {
//usei <br> no texto para dar espaço//
    return (
    <ContainerProfile>
       <TopBar/> 
    <BarProfile>
    <TitlePerfil>
       Meu Perfil 
    </TitlePerfil>
    </BarProfile>
    <DataUser>
       Bruna Oliveira
       <br></br>
       bruna_o@gmail.com
       <br></br>
       33333.3333
    <ImgEdit1 src={botaoEditar}/>
    </DataUser>
    <RegisterAdress>
       Endereço cadastrado
       <br></br>
       Rua Alessandra Vieira, 42 - Santana
        <ImgEdit2 src={botaoEditar}/>
    </RegisterAdress>
    <Requests>Histórico de pedidos</Requests>
    <LineBlack></LineBlack>
    <p>Você não realizou nenhum pedido</p>
    </ContainerProfile>
   
    )
}