import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, Logo, Button, SignUpContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToAddress } from "../../routes/Coordinator";
import axios from 'axios';
import {UrlApi} from '../../constants/urls'


export const SignUp = () => {
    const history = useHistory();
    const [form, onChangeForm] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
    });

    const onSubmitForm = (event) => {
            event.preventDefault()
            const body = {
                name:form.name,
                email: form.email,
                cpf: form.cpf,
                password: form.password
              };
          
              axios
                .post(`${UrlApi}/signup`, body, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })
                .then((response) => {
                  localStorage.setItem("token", response.data.token);
                  history.push("/feed"); 
                  console.log(response)
                  
                })
                .catch((error) => {
                  console.log(error)
                  });
        
        console.log(form);
        goToAddress(history);
    }
    
    return (
        <SignUpContainer>
            <Logo src={logo}></Logo>
            <h3>Cadastrar</h3>
            <form id={"signup_form"} onSubmit={onSubmitForm}>
                <FormContainer>
                    <TextField required
                        id="name"
                        name="name"
                        label="Nome"
                        type="name"
                        variant="outlined"
                        placeholder="Nome e Sobrenome"
                        onChange={onChangeForm}
                        value={form.name} />
                    <br />

                    <TextField required
                        id="email"
                        name="email"
                        label="E-mail"
                        type="email"
                        variant="outlined"
                        placeholder="email@email.com"
                        onChange={onChangeForm}
                        value={form.email} />
                    <br />

                    <TextField required
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        type="number"
                        variant="outlined"
                        placeholder="000.000.000-00"
                        onChange={onChangeForm}
                        value={form.cpf} />
                    <br />

                    <TextField required
                        id="password"
                        name="password"
                        label="Senha"
                        type="password"
                        variant="outlined"
                        placeholder="Mínimo 6 caracteres"
                        onChange={onChangeForm}
                        value={form.password} />
                    <br />

                    <TextField required
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirmar Senha"
                        type="password"
                        variant="outlined"
                        placeholder="Confirme a senha anterior"
                        onChange={onChangeForm}
                        value={form.confirmPassword} />

                <Button> Criar</Button>
                </FormContainer>
            </form>
        </SignUpContainer>
    )
}