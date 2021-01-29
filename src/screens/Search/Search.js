import React from 'react';
import TextField from '@material-ui/core/TextField';
import {MainDiv, FormContainer} from './styled'
import search from '../../img/search.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import { RestaurantCard } from '../../components/RestaurantCard.js/RestaurantCard';


export const Search = () => {

    return (
        <MainDiv>
            <FormContainer>
                <TextField
                    name={"restaurante"}
                    margin={'normal'}
                    placeholder="Restaurante"
                    variant={'outlined'}
                    InputProps={{startAdornment: (
                        <InputAdornment position="start">
                        <img src={search}/>
                        </InputAdornment>
                    )}}
            
                />
            </FormContainer>
            <RestaurantCard/>
            <RestaurantCard/>
        </MainDiv>
        
   
    )
}