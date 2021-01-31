import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, LoginContainer, Logo, Button } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToSignup } from "../../routes/Coordinator";
import {UrlApi} from '../../constants/urls'
import axios from 'axios';

export const LoginUser = () => {
    const history = useHistory();
    const [form, onChangeForm] = useForm({
        email: '',
        password: '',      
});

    const login = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
          };
      
          axios
            .post(`${UrlApi}/login`, body, {
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
    }
    

    return (
        <LoginContainer>
            <Logo src={logo}></Logo>
            <h3>Entrar</h3>
            <form id={"login_form"} onSubmit={login}>
                <FormContainer>
                    <TextField 
                        name={"email"}
                        required 
                        id="email" 
                        label="Email" 
                        variant="outlined" 
                        placeholder="email@email.com" 
                        onChange={onChangeForm} 
                        value={form.email} />
                    <br />
                    <TextField required 
                        name={"password"}
                        id="password" 
                        label="Senha" 
                        type="password" 
                        placeholder="Mínimo 6 caracteres" 
                        variant="outlined" 
                        onChange={onChangeForm} 
                        value={form.password}/>
                    <Button>Entrar</Button>
                </FormContainer>
            </form>
            <p>Não possui cadastro?</p>
            <p onClick={()=> goToSignup(history)}> Clique aqui.</p>
        </LoginContainer>
    )
}