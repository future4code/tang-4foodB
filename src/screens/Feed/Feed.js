import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { MainDiv, FormContainer } from './styled';
import search from '../../img/search.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { TopBar } from "../../components/TopBar/TopBar";
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { goToSearch } from "../../routes/Coordinator";
import { Filter } from '../../components/Filter/Filter';
import GlobalStateContext from "../../global/GlobalStateContext";


const Feed = () => {
    const {setters, requests} = useContext(GlobalStateContext);
    const history = useHistory();

    useEffect(() => {
        requests.getRestaurants();
        setters.setTitle("4FoodB")
    }, [requests, setters]);
    
    return (
        <MainDiv>
            <TopBar />

            <FormContainer>
                <TextField
                    name={"restaurante"}
                    margin={'normal'}
                    placeholder="Restaurante"
                    variant={'outlined'}
                    onClick={() => goToSearch(history, "teste")}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={search} alt="Search" />
                            </InputAdornment>
                        )
                    }}

                />
            </FormContainer>
            <Filter />
            <BottomBar />
        </MainDiv>


    )
}
export default Feed;