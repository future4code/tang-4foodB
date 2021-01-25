import { AppBar } from '@material-ui/core';
import React from 'react';
import App from '../../App';
import {ContainerProfile, TitlePerfil, ContainerBar, RegisterAdress, DataUser, ImgEditar, Requests, LineBlack} from './styled';
import  botaoEditar from '../../img/botaoEditar.png';

export const ProfilePage = () => {

    return (
    <ContainerProfile>
    <ContainerBar>
    <TitlePerfil>
    Meu Perfil 
    </TitlePerfil>
    <DataUser>
        Bruna Oliveira
        <ImgEditar src={botaoEditar}/>
    </DataUser>
    <RegisterAdress>
        Endereço cadastrado
        <ImgEditar src={botaoEditar}/>
    </RegisterAdress>
    <Requests>Histórico de pedidos</Requests>
    <LineBlack></LineBlack>
    <p>Você não realizou nenhum pedido</p>
    </ContainerBar>
    </ContainerProfile>
   
    )
}