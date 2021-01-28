import React from 'react';
import styled, { SplashContainer } from './styled';
import logobranco from '../../img/logobranco.png';


export const Splash = () => {

    return (
        <SplashContainer>
            <img src={logobranco}></img>
        </SplashContainer>
    )
}