import React from 'react';
import { useHistory } from "react-router-dom";
import {MainDiv, FormContainer} from './styled';
import search from '../../img/search.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { TopBar } from "../../components/TopBar/TopBar";
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { goToSearch } from "../../routes/Coordinator";
import { Filter } from '../../components/Filter/Filter';

export const Feed = () => {
    const history = useHistory();
    return (
        <MainDiv>
            <TopBar />
            
            <FormContainer>
                <TextField
                    name={"restaurante"}
                    margin={'normal'}
                    placeholder="Restaurante"
                    variant={'outlined'}
                    onClick= {() => goToSearch(history,"teste")}
                    InputProps={{startAdornment: (
                        <InputAdornment position="start">
                        <img src={search}/>
                        </InputAdornment>
                    )}}
            
                />
            </FormContainer>
            <Filter />
            <BottomBar />
        </MainDiv>
        
   
    )
}