import React from 'react';
import { useHistory } from "react-router-dom";
//import logo from '../../img/logo.png';
import { FormContainer, Logo, Button, AddressContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToFeed } from "../../routes/Coordinator";


export const Address = () => {
    const history = useHistory();
    const form = useForm(
        
    );
    return (
        <AddressContainer>
            <h3>Meu Endereço</h3>
            <FormContainer>
                <TextField required id="logradouro" label="Logradouro" variant="outlined" placeholder="Rua / Av."/>
                <br/>
                <TextField required id="numero" label="Número" type="number" placeholder="Número" variant="outlined"/>
                <br/>
                <TextField required id="complemento" label="Complemento" variant="outlined" placeholder="Apto / Bloco"/>
                <br/>
                <TextField required id="bairro" label="Bairro" variant="outlined" placeholder="Bairro"/>
                <br/>
                <TextField required id="cidade" label="Cidade" variant="outlined" placeholder="Cidade"/>
                <br/>
                <TextField required id="estado" label="Estado" variant="outlined" placeholder="Estado"/>
            </FormContainer>
            <Button onClick={()=> goToFeed(history)}>Salvar</Button>
        </AddressContainer>
    )
}