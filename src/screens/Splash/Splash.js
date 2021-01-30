import React from 'react';
import {useHistory} from "react-router-dom";
import { SplashContainer } from './styled';
import logobranco from '../../img/logobranco.png';
import {goToLogin} from "../../routes/Coordinator"

export const Splash = () => {
    const history = useHistory();
    return (
        <SplashContainer onClick={() => goToLogin(history)}>
            <img src={logobranco} alt="4FoodB"></img>
        </SplashContainer>
    )
}