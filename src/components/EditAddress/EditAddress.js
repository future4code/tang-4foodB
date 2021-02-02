import React from 'react';
import { UserContainer, FormContainer, ButtonSalvar, DivTitle, ImgIcon, TitleAddress } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import anterior from '../../img/anterior.png';
import { useHistory } from "react-router-dom";
import {goToProfile} from "../../routes/Coordinator";
import {UrlApi} from '../../constants/urls';
import axios from 'axios';


export const EditAddress = () => {
  const history = useHistory();
  const [form, handleInput] = useForm({street: "", number:"", neighbourhood:"", city:"", state:"", complement:""})

  

const updateProfile = (event) => {
    event.preventDefault()
    const body = {
    street: form.street,
    number: form.number,
    neighbourhood: form.neighbourhood,
    city: form.city,
    state: form.state,
    complement: form.complement,
    }
      axios
          .put(`${UrlApi}/address`, body, {
            headers: {
              auth: localStorage.getItem('token'),
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            localStorage.setItem('token', response.data.token)
            alert('Endereço atualizado com sucesso!')
            console.log(response.data)
          })
          .catch((error) =>{
            console.log(error.message)
          })
}

    return (
        
        <UserContainer>
            <DivTitle>
              <ImgIcon src={anterior} onClick={()=> goToProfile(history)}/>
              <TitleAddress>Endereço</TitleAddress> 
            </DivTitle>
        <FormContainer id={"editadd_form"}> 
        <TextField
          required
          value={form.street}
          onChange={handleInput}
          name={"street"}
          margin={'normal'}
          label={'Logradouro'}
          variant={'outlined'}
        />
        
        <TextField
        required
        value={form.number}
        onChange={handleInput}
        name={"number"}
        margin={'normal'}
        label={'Número'}
        variant={'outlined'}
         />

         <TextField
        required
        value={form.complement}
        onChange={handleInput}
        name={"complement"}
        margin={'normal'}
        label={'Complemento'}
        variant={'outlined'}
         />

       <TextField
        required
        value={form.neighbourhood}
        onChange={handleInput}
        name={"neighbourhood"}
        margin={'normal'}
        label={'Bairro'}
        variant={'outlined'}
         />

       <TextField
        required
        value={form.city}
        onChange={handleInput}
        name={"city"}
        margin={'normal'}
        label={'Cidade'}
        variant={'outlined'}
         />
         <TextField
        required
        value={form.state}
        onChange={handleInput}
        name={"state"}
        margin={'normal'}
        label={'Estado'}
        variant={'outlined'}
         />
        <ButtonSalvar onClick={updateProfile}>Salvar</ButtonSalvar>
        </FormContainer>
        </UserContainer>
    )
};