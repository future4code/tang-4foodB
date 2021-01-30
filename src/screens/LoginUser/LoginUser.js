import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, LoginContainer, Logo, Button } from './styled';
import TextField from '@material-ui/core/TextField';
//import useForm from '../../hooks/useForm';
import { goToSignup } from "../../routes/Coordinator";


export const LoginUser = () => {
    const history = useHistory();

    const login = (user, password) => {
        //função de login
    }

    return (
        <LoginContainer>
            <Logo src={logo}></Logo>
            <h3>Entrar</h3>
            <FormContainer>
                    <TextField required id="email" label="Email" variant="outlined" placeholder="email@email.com" />
                    <br />
                    <TextField required id="password" label="Senha" type="password" placeholder="Mínimo 6 caracteres" variant="outlined" />
                    <Button> Entrar</Button>
            </FormContainer>
            <p>Não possui cadastro?</p>
            <p onClick={()=> goToSignup(history)}> Clique aqui.</p>
        </LoginContainer>
    )
}