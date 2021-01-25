import React from 'react';
import { UserContainer, FormContainer, ButtonSalvar, DivTitle, ImgIcon } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import anterior from '../../img/anterior.png';

export const ProfileAddress = () => {
  const [form, handleInput] = useForm({logradouro: "", numero:"", complemento:"", bairro:"", cidade:"", estado:""})

    return (
        
        <UserContainer>
            <DivTitle>
             <ImgIcon src={anterior}/>
                Endereço
            </DivTitle>
        <FormContainer>
        <TextField
          value={form.logradouro}
          onChange={handleInput}
          name={"logradouro"}
          margin={'normal'}
          label={'Logradouro*'}
          variant={'outlined'}
        />
        
        <TextField
        value={form.numero}
        onChange={handleInput}
        name={"numero"}
        margin={'normal'}
        label={'Número*'}
        variant={'outlined'}
         />

         <TextField
        value={form.complemento}
        onChange={handleInput}
        name={"complemento"}
        margin={'normal'}
        label={'Complemento*'}
        variant={'outlined'}
         />

       <TextField
        value={form.bairro}
        onChange={handleInput}
        name={"bairro"}
        margin={'normal'}
        label={'Bairro*'}
        variant={'outlined'}
         />

       <TextField
        value={form.cidade}
        onChange={handleInput}
        name={"cidade"}
        margin={'normal'}
        label={'Cidade*'}
        variant={'outlined'}
         />
         <TextField
        value={form.estado}
        onChange={handleInput}
        name={"estado"}
        margin={'normal'}
        label={'Estado*'}
        variant={'outlined'}
         />
        <ButtonSalvar>Salvar</ButtonSalvar>
        </FormContainer>
        </UserContainer>
    )
};