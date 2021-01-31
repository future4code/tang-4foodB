import React, { useEffect } from 'react';
import {ContainerProfile, TitlePerfil, RegisterAdress,BarProfile,TextRequest, DataUser, ImgEdit1,ImgEdit2, Requests, LineBlack,MessageProfile} from './styled';
import  botaoEditar from '../../img/botaoEditar.png';
import { TopBar } from '../../components/TopBar/TopBar';
import useProtected from '../../hooks/useProtected'
import {UrlApi} from '../../constants/urls'
import axios from 'axios';

export const Profile = () => {
   useProtected();
   
   const getUser = () => {

      axios
      .get(`${UrlApi}/profile`, {
         headers: {
            auth: localStorage.getItem('token')
         }
      })
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
      }  
   
   useEffect(() => {
         getUser();
      }, []);
         
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
    <Requests>
       <TextRequest>Histórico de pedidos</TextRequest>
       </Requests>
    <LineBlack></LineBlack>
    <MessageProfile>Você não realizou nenhum pedido</MessageProfile>
    </ContainerProfile>
   
    )
}