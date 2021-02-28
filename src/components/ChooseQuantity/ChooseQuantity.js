import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GlobalStateContext from '../../global/GlobalStateContext'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 200,
  },
}));

export function ChooseQuantity() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); 
  const { states, requests, setters } = useContext(GlobalStateContext);
  

  const handleChange = (event) => {
    setters.setQuantity(Number(event.target.value) || '');
  };
  console.log(states.quantity)


  const handleClose = () => {
    setOpen(false);
  }; 

  // aqui tentamos fazer uma função de adicionar ao carrinho, mas não funcionou kkk
  /* const adicionarAoCarrinho = (id) => {
        const novoProduto = states.restaurant.products((produto) => id === produto.id);
        let novaLista = [
          ...this.states.cart,
          { ...novoProduto }
        ];
  
        setters.setCart({ cart: novaLista });
        console.log(states.cart)
    }; */
  


  return (
    
      <div>
        <DialogTitle>Selecione a quantidade desejada</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Quantidade</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                name="Quantidade"
                id="demo-dialog-select"
                value={states.quantity}
                onChange={handleChange} 
                input={<Input />}
              >
                <MenuItem value="">
                  <em>0</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button>
            Adicionar ao carrinho
          </Button>
          
        </DialogActions>
    </div>
  );
}