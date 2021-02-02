import styled from 'styled-components';


export const CardDiv = styled.div`
    border-radius: 10px;
    border: 1px solid lightgrey;
    width: 80vw;
    height: 15vh;
    display: flex;
    margin-bottom: 5px;
    #titulo {
        margin-left:20px;
        margin-top: 15px;
        font-size: 16px;
        color: red;
    }
    #valor{
        margin-left: 20px;
        margin-top: -8px;
        font-size: 16px;
    }
    p{
        margin-left: 20px;
        margin-top: -15px;
    }
`