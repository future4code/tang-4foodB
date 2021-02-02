import React, { useEffect, useState } from 'react';
import {ContainerProfile, TitlePerfil, RegisterAdress,BarProfile,TextRequest, DataUser, ImgEdit1,ImgEdit2, Requests, LineBlack,MessageProfile} from './styled';
import  botaoEditar from '../../img/botaoEditar.png';
import { TopBar } from '../../components/TopBar/TopBar';
import useProtected from '../../hooks/useProtected'
import {UrlApi} from '../../constants/urls';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToEditAddress} from "../../routes/Coordinator";
import {goToEditUser} from "../../routes/Coordinator";
import {BottomBar} from '../../components/BottomBar/BottomBar';
import Divider from '@material-ui/core/Divider';
import CardOrderHistory from '../../components/CardOrderHistory/CardOrderHistory';


export const Profile = () => {
   useProtected();
   const history = useHistory();
   const [profile, setProfile] = useState([]);
   const [address, setAddress] = useState([]);
   const [orders, setOrders] = useState([]);

   const getProfile = () => {
      axios.get(`${UrlApi}/profile`, {
           headers: {
              auth: localStorage.getItem('token'),
              'Content-Type': 'application/json'
           }
        })
        .then((response) => {
            setProfile(response.data.user)
        })
        .catch((error) => {
          console.log(error);
        });
        
    };

    const getAddress = () => {
      axios
        .get(`${UrlApi}/profile/address`, {
           headers: {
              auth: localStorage.getItem('token'),
           }
        })
        .then((response) => {
            setAddress(response.data.address)
        })
        .catch((error) => {
          console.log(error);
        });
        
    };

    const getOrdersHistory = () => {
      axios
        .get(`${UrlApi}/orders/history`, {
           headers: {
              auth: localStorage.getItem('token'),
              'Content-Type': 'application/json'
           }
        })
        .then((response) => {
            setOrders(response.data.orders)
            
        })
        .catch((error) => {
          console.log(error);
        });
        
    };

   
   useEffect(() => {
      getProfile();
      getAddress();
      getOrdersHistory();
      }, []);
         
         //usei <br> no texto para dar espaço//
   //   const tamanho = orders.lenght
   //    if(tamanho === 0){
   //       return 'Você não realizou nenhum pedido';
   //    }else(tamanho > 0)
   //       return 
         
   

    return (
    <ContainerProfile>
      <BarProfile>
         <TitlePerfil>
            Meu Perfil 
         </TitlePerfil>
      </BarProfile>
      <DataUser>
         <p>{profile.name}</p>
         <br></br>
         <p>{profile.email}</p>
         <br></br>
         <p>{profile.cpf}</p>
         <ImgEdit1 src={botaoEditar} onClick={()=> goToEditUser(history)}/>
      </DataUser>
      <RegisterAdress>
         <p id="endereco">Endereço cadastrado</p>
         <p>{address.street}, {address.number} - {address.neighbourhood}, {address.city} - {address.state}</p>
         <ImgEdit2 src={botaoEditar} onClick={()=> goToEditAddress(history)}/>
      </RegisterAdress>
      <Requests>
         <TextRequest>Histórico de pedidos</TextRequest>
         <Divider/>
         <br/>         
         { orders ?  <div>{orders.map((order) => {
                    return <CardOrderHistory order={order}/> })}</div> : <div>Você não realizou nenhum pedido</div>}
      </Requests>
       <br/>
      
      <BottomBar/>
    </ContainerProfile>
   
    )
}