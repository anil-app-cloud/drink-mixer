import styled from 'styled-components'

export const CardDeatilsBg = styled.div`
    margin-top: 7vh;
    min-height: 100vh;
    list-style: none;
    min-width: 98vw;
    background-color: ${props => props.darkTheme ? 'black':'white' };
    color:${props => props.darkTheme ? 'white':'black' };
    padding: 20px;
    display: flex;
    align-items: center; 
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        min-width: 90vw; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DirnkPic = styled.img`

    width: 300px;
    border: 0px none;
    border-radius: 5px;

    @media (max-width: 768px){
        width: 300px;
    }
`
export const DrinkDetailsCard = styled.div`
    margin: 5px;
    background-color: ${props => props.darkTheme ? 'black':'white' };
    color:${props => props.darkTheme ? 'white':'black' };
    min-width: 100vw
    margin-left: 10px;
`

export const DrinkDescription = styled.p`
    width: 100%;
    height: 100px;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none; 
    padding: 10px;
`

export const Strongtext = styled.span`
    font-weight: bold;
    
`

export const DetailsButton = styled.button`
    background-color: blue;
    padding: 10px;
    color: white;
    border: 0px none;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`
