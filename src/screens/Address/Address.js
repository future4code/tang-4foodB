import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { FormContainer, Button, AddressContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import useProtected from '../../hooks/useProtected';
import { goToFeed } from "../../routes/Coordinator";
import {UrlApi} from '../../constants/urls'


export const Address = () => {
    useProtected();
    const history = useHistory();
    const [form, onChangeForm] = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: '',
    });

    
    const submitAddress = (event) => {
            event.preventDefault()
            const body = {
                    street: form.street,
                    number: form.number,
                    neighbourhood: form.neighbourhood,
                    city: form.city,
                    state: form.state,
                    complement: form.complement
              };
          
              axios
                .put(`${UrlApi}/address`, body, {
                    headers: {
                        auth: localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    }
                  })
                .then((response) => {                  
                    localStorage.setItem("token", response.data.token)
                })
                .catch((error) => {
                  console.log(error)
                  });
        
        //importar form do material e fazer validação de cpf e confirmação de senha
        console.log(form);
       /*  goToAddress(history); */
    }
    

    return (
        <AddressContainer>
            <h3>Meu Endereço</h3> 
            <form id={"adress_form"} onSubmit={submitAddress} >
                <FormContainer >
                    <TextField required 
                        name="street"
                        id="logradouro" 
                        label="Logradouro" 
                        variant="outlined" 
                        placeholder="Rua / Av." 
                        onChange={onChangeForm} 
                        value={form.logradouro} />
                    <br/>
                    <TextField 
                        required 
                        id="number" 
                        label="Número" 
                        type="number" 
                        placeholder="Número" 
                        variant="outlined" 
                        onChange={onChangeForm} 
                        value={form.numero}/>
                    <br/>
                    <TextField required 
                        name="complement"
                        id="complemento" 
                        label="Complemento" 
                        variant="outlined" 
                        placeholder="Apto / Bloco" 
                        onChange={onChangeForm} 
                        value={form.complemento} />
                    <br/>
                    <TextField required 
                        name="neighbourhood"
                        id="bairro" 
                        label="Bairro" 
                        variant="outlined" 
                        placeholder="Bairro" 
                        onChange={onChangeForm} 
                        value={form.bairro}/>
                    <br/>
                    <TextField required 
                        name="city"
                        id="cidade" 
                        label="Cidade" 
                        variant="outlined" 
                        placeholder="Cidade" 
                        onChange={onChangeForm} 
                        value={form.cidade}/>
                    <br/>
                    <TextField required 
                        name="state"
                        id="estado" 
                        label="Estado" 
                        variant="outlined" 
                        placeholder="Estado" 
                        onChange={onChangeForm} 
                        value={form.estado}/>
                </FormContainer>
                <Button>Salvar</Button>
            </form>
            
        </AddressContainer>
    )
}