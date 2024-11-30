import styled from 'styled-components'

export const ListItem = styled.li`
    border: 0px none;
    border-radius: 5px;
    list-style: none;
    min-width: 98vw;
    background-color: white;
    margin: 5px;
    padding: 20px;
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    border: 1px solid black;
    border-radius: 5px;

    @media (max-width: 768px) {
        min-width: 90vw; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DirnkPic = styled.img`

    width: 150px;
    border: 0px none;
    border-radius: 5px;

    @media (max-width: 768px){
        width: 100px;
    }
`
export const DrinkDetailsCard = styled.div`
    margin: 5px;
    background-color: white;
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
