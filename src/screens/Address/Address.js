import React from 'react';
import { useHistory } from "react-router-dom";
import { FormContainer, Button, AddressContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToFeed } from "../../routes/Coordinator";


export const Address = () => {
    const history = useHistory();
    const [form, onChangeForm] = useForm({
        street: '',
    });
    return (
        <AddressContainer>
            <h3>Meu Endereço</h3>
            <FormContainer>
                <TextField required id="logradouro" name="street" value={form.street} label="Logradouro" variant="outlined" placeholder="Rua / Av." onChange={onChangeForm}/>
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