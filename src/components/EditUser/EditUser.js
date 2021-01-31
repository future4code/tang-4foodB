import React from 'react';
import { UserContainer,ProfileBar,TitleEdit, FormContainer, ButtonSalvar, ImgIcon } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import anterior from '../../img/anterior.png';

export const EditUser = () => {
  const [form, handleInput] = useForm({name: "", email:"", cpf:""})

    return (
      
        <UserContainer>
            <ProfileBar>
            <ImgIcon src={anterior}/>
            <TitleEdit>editar</TitleEdit>
            </ProfileBar>
        <FormContainer>
        <TextField
          value={form.name}
          onChange={handleInput}
          name={"name"}
          margin={'normal'}
          label={'Nome*'}
          variant={'outlined'}
        />
        
        <TextField
        value={form.email}
        onChange={handleInput}
        name={"email"}
        margin={'normal'}
        label={'E-mail*'}
        variant={'outlined'}
         />

         <TextField
        value={form.cpf}
        onChange={handleInput}
        name={"cpf"}
        margin={'normal'}
        label={'CPF*'}
        variant={'outlined'}
         />
        
        <ButtonSalvar>Salvar</ButtonSalvar>
        </FormContainer>
        </UserContainer>
    )
};