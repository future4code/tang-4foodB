import React from 'react';
import { useHistory } from "react-router-dom";
//import logo from '../../img/logo.png';
import { FormContainer, Logo, Button, AddressContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToFeed } from "../../routes/Coordinator";


export const Address = () => {
    const history = useHistory();
    const [form, onChangeForm] = useForm({
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
       
    });

    const submitForm = () => {

    }

    return (
        <AddressContainer>
            <h3>Meu Endereço</h3> 
            <form id={"address_form"} onSubmit={submitForm}>
                <FormContainer >
                    <TextField required id="logradouro" label="Logradouro" variant="outlined" placeholder="Rua / Av." onChange={onChangeForm} value={form.logradouro} />
                    <br/>
                    <TextField required id="numero" label="Número" type="number" placeholder="Número" variant="outlined" onChange={onChangeForm} value={form.numero}/>
                    <br/>
                    <TextField required id="complemento" label="Complemento" variant="outlined" placeholder="Apto / Bloco" onChange={onChangeForm} value={form.complemento} />
                    <br/>
                    <TextField required id="bairro" label="Bairro" variant="outlined" placeholder="Bairro" onChange={onChangeForm} value={form.bairro}/>
                    <br/>
                    <TextField required id="cidade" label="Cidade" variant="outlined" placeholder="Cidade" onChange={onChangeForm} value={form.cidade}/>
                    <br/>
                    <TextField required id="estado" label="Estado" variant="outlined" placeholder="Estado" onChange={onChangeForm} value={form.estado}/>
                </FormContainer>
            </form>
            <Button onClick={()=> goToFeed(history)}>Salvar</Button>
        </AddressContainer>
    )
}