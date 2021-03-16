import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { FormContainer, Button, AddressContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToFeed } from "../../routes/Coordinator";
import {UrlApi} from '../../constants/urls'


export const Address = () => {
    
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
            let newToken = '';

            const body = {
                    street: form.street,
                    number: form.number,
                    neighbourhood: form.neighbourhood,
                    city: form.city,
                    state: form.state,
                    complement: form.complement
              };
          
              axios.put(`${UrlApi}/address`, body,{
                        headers: {
                          auth: localStorage.getItem('token'),
                          "Content-Type": "application/json"
                        }
                  })
                .then((response) => {                  
                    newToken = response.data.token
                    localStorage.setItem('token', newToken);
                    goToFeed(history); 
                })
                .catch((error) => {
                  console.log(error.message)
                  });
        
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
                        value={form.street} />
                    <br/>
                    <TextField 
                        required 
                        id="number" 
                        name="number" 
                        label="Número" 
                        type="number" 
                        placeholder="Número" 
                        variant="outlined" 
                        onChange={onChangeForm} 
                        value={form.number}/>
                    <br/>
                    <TextField required 
                        name="complement"
                        id="complemento" 
                        label="Complemento" 
                        variant="outlined" 
                        placeholder="Apto / Bloco" 
                        onChange={onChangeForm} 
                        value={form.complement} />
                    <br/>
                    <TextField required 
                        name="neighbourhood"
                        id="bairro" 
                        label="Bairro" 
                        variant="outlined" 
                        placeholder="Bairro" 
                        onChange={onChangeForm} 
                        value={form.neighbourhood}/>
                    <br/>
                    <TextField required 
                        name="city"
                        id="cidade" 
                        label="Cidade" 
                        variant="outlined" 
                        placeholder="Cidade" 
                        onChange={onChangeForm} 
                        value={form.city}/>
                    <br/>
                    <TextField required 
                        name="state"
                        id="estado" 
                        label="Estado" 
                        variant="outlined" 
                        placeholder="Estado" 
                        onChange={onChangeForm} 
                        value={form.state}/>
                </FormContainer>
                <Button>Salvar</Button>
            </form>
            
        </AddressContainer>
    )
}