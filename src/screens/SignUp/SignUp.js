import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, Logo, Button, SignUpContainer } from './styled';
import TextField from '@material-ui/core/TextField';
//import useForm from '../../hooks/useForm';
import { goToAddress } from "../../routes/Coordinator";


export const SignUp = () => {
    const history = useHistory();

    return (
        <SignUpContainer>
            <Logo src={logo}></Logo>
            <h3>Cadastrar</h3>
            <FormContainer>
                <TextField required id="nome" label="Nome" variant="outlined" placeholder="Nome e Sobrenome"/>
                <br/>
                <TextField required id="password" label="Senha" type="email" placeholder="email@email.com" variant="outlined"/>
                <br/>
                <TextField required id="cpf" label="CPF" variant="outlined" placeholder="000.000.000-00"/>
                <br/>
                <TextField required id="senha" label="Senha" variant="outlined" placeholder="Mínimo 6 caracteres"/>
                <br/>
                <TextField required id="confirmar" label="Confirmar" variant="outlined" placeholder="Confirme a senha anterior"/>
            </FormContainer>
            <Button onClick={()=> goToAddress(history)}> Criar</Button>
        </SignUpContainer>
    )
}