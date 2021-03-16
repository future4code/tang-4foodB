import React, { useState, useEffect, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { MainDiv, FormContainer } from './styled'
import searchIcon from '../../img/search.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import { RestaurantCard } from '../../components/RestaurantCard.js/RestaurantCard';
import { BottomBar } from "../../components/BottomBar/BottomBar";
import { TopBar } from '../../components/TopBar/TopBar';
import useForm from '../../hooks/useForm';
import GlobalStateContext from "../../global/GlobalStateContext";


export const Search = () => {
    const [form, onChangeForm] = useForm({
        search: '',
    })
    const { states } = useContext(GlobalStateContext);
    const [filtered, setFiltered] = useState(states.restaurants)

    useEffect(() => {
        search(form.search)
    }, [form.search]);

    const search = (text) => {
        const filterRest = states.restaurants.filter(
            (rest) => {
                return rest.name.indexOf(text) !== -1
            })
        setFiltered(filterRest);
    }

    const submitForm = () => {
        search(form.search)
    }

    return (
        <MainDiv>
            <TopBar />
            <form id={"search_form"} onSubmit={submitForm}>
                <FormContainer>
                    <TextField
                        name={"search"}
                        margin={'normal'}
                        placeholder="Restaurante"
                        variant={'outlined'}
                        value={form.search}
                        onChange={onChangeForm}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={searchIcon} alt={"Search"} />
                                </InputAdornment>
                            )
                        }}

                    />
                </FormContainer>
            </form>
            {filtered.map(
                (rest) => {
                    return <RestaurantCard rest={rest} key={rest.id} />
                })}
            <BottomBar />
        </MainDiv>


    )
}