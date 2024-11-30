import {styled} from 'styled-components'

export const AboutBg = styled.div`
    whidth: 100vw;
    height: 100vh;
    background-image: url('https://www.shutterstock.com/image-photo/cocktails-assortment-served-on-dark-600nw-2031909332.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 6%;
    padding-left: 3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;

    @media (max-width: 768px){
        padding-top: 10%;
        height: 100%;
        overflow: auto;
    }
    

`
export const Heading = styled.h1`
    font-size: 23px;
`
export const StrongText = styled.span`
    font-weight: bold;
    
`
