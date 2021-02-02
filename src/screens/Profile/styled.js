import styled from 'styled-components';


export const ContainerProfile = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
height: 40rem;
`
export const BarProfile = styled.div`
width: 100%;
height: 3rem;
position:fixed;
margin-left: auto;
margin-right: auto;
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);  background-color: #ffffff;
`
export const TitlePerfil = styled.div`
width: 100vw;
height: 2.8rem;
font-family: Roboto;
font-size: 18px;
text-align: center;
margin-top: 20px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
`
export const DataUser = styled.div`
width: 100vw;
height: 14vh;
margin-top: 50px;
p{
 margin-left: 40px;
 margin-bottom: -25px;
}
background-color:white;
position: fixed;
`
export const ImgEdit1 = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-right: auto;
margin-left: 300px;
object-fit: contain;
margin-top: -25px;
`
export const RegisterAdress = styled.div`
width: 100vw;
height: 10vh;
margin-top: 150px;
margin-bottom: 50px;
padding: 1rem;
background-color: #eeeeee;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: space-between;
p{
    margin-left:25px;
    margin-bottom: -40px;
    margin-top: 1px;
}
#endereco{
    color: lightgrey;
    font-size: 15px;
}
position: fixed;
`
export const ImgEdit2 = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-right: auto;
margin-left: 280px;
object-fit: contain;
margin-top: -25px;
z-index: 2;
`
export const Requests = styled.div`
width: 20.5rem;
height: 1.125rem;
margin-top: 380px;
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: var(--black);
`
export const TextRequest = styled.p`
margin-top: -8rem;
margin-left: 0;
`
export const MessageProfile = styled.p`
margin-top: 10px;
`