import styled from 'styled-components';

export const ImgURL = `https://d1e676vce0x2at.cloudfront.net/uploads/post/image/11558/main_destaque_Alexandr_Popel.jpg`

export const CardDiv = styled.div`
    border-radius: 10px;
    border: 1px solid lightgrey;
    width: 90vw;
    height: 15vh;
    display: flex;
    margin-bottom: 5px;
`

export const Imagem = styled.div`
    width: 50%;
    height: 15vh;
    #imagem {
        width:100%;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        margin: 0;
    }
`

export const Descricao = styled.div`
    height: 14vh;
    width: 80vw;
    margin-left: 10px;
    margin-bottom: 1px;
    #titulo {
        color: red;
        margin-top: 10px;
        margin-bottom: 25px;
    }
    p {
        color: lightgrey;
        margin-top: -15px;
        font-size: 13px;
    }
    #valor {
        margin-top: -10px;
    }
`

export const Outros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    button {
        width: 20vw;
        height: 4vh;
        border: 1px solid red;
        background-color: white;
        color: red;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #quantidade {
        width: 10vw;
        height: 4vh;
        border: 1px solid red;
        background-color: white;
        color: red;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`