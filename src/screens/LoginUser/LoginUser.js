import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../img/logo.png';
import { FormContainer, LoginContainer, Logo, Button } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { goToSignup } from "../../routes/Coordinator";
import {UrlApi} from '../../constants/urls'
import axios from 'axios';
// fiz a instalação do loading usando o ROLLER, porém ainda falta função//;
import { Roller } from "react-awesome-spinners";
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
  
export const LoginUser = () => {
    const history = useHistory();
//aqui sou eu de novo fazendo o password funcionar//
    const classes = useStyles();
    const [values, setValues] = React.useState({ 
        password: '',
    showPassword: false,
  });
// --------*----pronto-------*-------- //

    const [loading, setLoading] = useState(true);
    const [form, onChangeForm] = useForm({
        email: '',   
});

    const login = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
    
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
            })
            .catch((error) => {
              console.log(error)
              });
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
        <LoginContainer>
            <Logo src={logo}></Logo>
            <h3>Entrar</h3>
            <br>
            </br>
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

                <Button>
                 Entrar
                </Button>
            </FormContainer>

            </form>
             
            <Roller/>
            <p>Não possui cadastro?</p>
            <p onClick={()=> goToSignup(history)}> Clique aqui.</p>
        
        </LoginContainer>
    )
}