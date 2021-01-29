import React from 'react';
import logo from '../../img/logo.png';
import { FormContainer, LoginContainer, Logo, Button } from './styled';
import TextField from '@material-ui/core/TextField';
//import useForm from '../../hooks/useForm';



export const LoginUser = () => {

    return (
        <LoginContainer>
            <Logo src={logo}></Logo>
            <h3>Entrar</h3>
            <FormContainer>
                <TextField required id="email" label="Email" variant="outlined" placeholder="email@email.com"/>
                <br/>
                <TextField required id="password" label="Senha" type="password" placeholder="Mínimo 6 caracteres" variant="outlined"/>
            </FormContainer>
            <Button> Entrar</Button>
            <p>Não possui cadastro? Clique aqui.</p>
        </LoginContainer>
    )
}