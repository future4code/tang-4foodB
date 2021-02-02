import React from 'react';
import { UserContainer,ProfileBar,TitleEdit, FormContainer, ButtonSalvar, ImgIcon } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import anterior from '../../img/anterior.png';
import { useHistory } from 'react-router-dom';
import {goToProfile} from "../../routes/Coordinator";
import axios from 'axios';
import {UrlApi} from '../../constants/urls'


export const EditUser = () => {
  const history = useHistory();
  const [form, handleInput] = useForm({name: "", email:"", cpf:""})


const updateProfile = (event) => {
    event.preventDefault()
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      }
      axios
        .put(`${UrlApi}/profile`, body, {
          headers: {
            auth: localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          alert('Alteração salva com sucesso!')
          console.log(response.data)
        })
        .catch((error) =>{
          console.log(error.message)
        })
}

    return (
      
        <UserContainer>
            <ProfileBar>
            <ImgIcon src={anterior} onClick={()=> goToProfile(history)}/>
            <TitleEdit>Editar</TitleEdit>
            </ProfileBar>
        <FormContainer id={"editaruser_form"}>
        <TextField
          required
          value={form.name}
          onChange={handleInput}
          name={"name"}
          margin={'normal'}
          label={'Nome'}
          variant="outlined"
        />
        
        <TextField
        required
        value={form.email}
        onChange={handleInput}
        name={"email"}
        margin={'normal'}
        label={'E-mail'}
        variant={'outlined'}
         />

         <TextField
        required
        value={form.cpf}
        onChange={handleInput}
        name={"cpf"}
        margin={'normal'}
        label={'CPF'}
        variant={'outlined'}
         />
        
        <ButtonSalvar onClick={updateProfile}>Salvar</ButtonSalvar>
        </FormContainer>
        </UserContainer>
    )
};