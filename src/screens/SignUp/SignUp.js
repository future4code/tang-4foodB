import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, Logo, Button, SignUpContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToAddress } from "../../routes/Coordinator";
import axios from 'axios';
import {UrlApi} from '../../constants/urls'
//password imports abaixo//
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// - password estilização - //;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '40ch',
    },
  }));

// -----*--- fim password estilização----*--- //

export const SignUp = () => {
    const history = useHistory();
    //aqui sou eu de novo fazendo o password funcionar//
    const classes = useStyles();
    const [values, setValues] = React.useState({ 
        password: '',
    showPassword: false,
  });
// --------*----pronto-------*-------- //
    const [form, onChangeForm] = useForm({
        name: '',
        email: '',
        cpf: '',
    });

    const onSubmitForm = (event) => {
            event.preventDefault()
            const body = {
                name:form.name,
                email: form.email,
                cpf: form.cpf,
              };
          
              axios
                .post(`${UrlApi}/signup`, body, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })
                .then((response) => {
                  localStorage.setItem("token", response.data.token);
                  
                })
                .catch((error) => {
                  console.log(error)
                  });
        
        goToAddress(history);
    }

     //bruna passando outra vez //
     const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    // terminando aqui de novo ///
    
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
            <div
             className={classes.root}>
            <div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Senha
                  </InputLabel>
                <OutlinedInput
                     id="outlined-adornment-password"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.password}
                     onChange={handleChange('password')}
                     endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl>
        
            </div>
            </div>
            <div
             className={classes.root}>
            <div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirmar Senha
                  </InputLabel>
                <OutlinedInput
                     id="outlined-adornment-password"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.password}
                     onChange={handleChange('password')}
                     endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl>
        
            </div>
            </div>
            


                <Button> Criar</Button>
                </FormContainer>
            </form>
            
        </SignUpContainer>
    )
}