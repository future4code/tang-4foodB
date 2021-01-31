import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Roboto;
    margin-top: 60px;
    width: 100vw;
`

export const Logo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 15vh;
    margin-bottom: 30px;
    margin-top: 35px;
    input {
        width: 80vw;
    }
`
export const Button = styled.button`
background-color: #e8222e;
width: 22.5rem;
height: 2.625rem;
margin-bottom: 10px;
margin-top: 20px;
padding: 0.75rem 1rem;
border-radius: 2px;
border: 1px #e8222e;
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
text-align:center;
`
