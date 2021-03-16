import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
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
  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event) => {
    setQuantity(Number(event.target.value) || '');
  };


  const handleClose = () => {
    setOpen(false);
  }; 

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
                value={quantity}
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
          <Button onClick={handleClose}>
            Adicionar ao carrinho
          </Button>
        </DialogActions>
    </div>
  );
}