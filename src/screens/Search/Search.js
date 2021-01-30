import React from 'react';
import TextField from '@material-ui/core/TextField';
import {MainDiv, FormContainer} from './styled'
import search from '../../img/search.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import { RestaurantCard } from '../../components/RestaurantCard.js/RestaurantCard';
import { BottomBar } from "../../components/BottomBar/BottomBar";
import { TopBar } from '../../components/TopBar/TopBar';
import useForm from '../../hooks/useForm';

export const Search = () => {
    const [form, onChangeForm] = useForm({
        search: '',
    })

    const submitForm = () => {
console.log(search);
    }

    return (
        <MainDiv>
            <TopBar />
            <form id={"search_form"} onSubmit={submitForm}>
                <FormContainer>
                    <TextField
                        name={"restaurante"}
                        margin={'normal'}
                        placeholder="Restaurante"
                        variant={'outlined'}
                        value={form.search}
                        onChange={onChangeForm}
                        InputProps={{startAdornment: (
                            <InputAdornment position="start">
                            <img src={search} alt={"Search"}/>
                            </InputAdornment>
                        )}}
                
                    />
                </FormContainer>
            </form>
            <RestaurantCard/>
            <RestaurantCard/>
            <BottomBar />
        </MainDiv>
        
   
    )
}