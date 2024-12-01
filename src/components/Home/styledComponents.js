import styled from 'styled-components'
export const MainBg = styled.div`
    margin-top: 0px;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color:${props => props.darkTheme ? 'black': 'white'};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HomeBg = styled.ul`
    margin-top: 4vh;
    padding-top:7vh;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color:${props => props.darkTheme ? 'black': 'white'};
    color: while;
    justify-content: center; 
    align-items: center; 
    padding: 20px;
    list-style: none;
    overflow: hidden;
    @media (max-width: 768px){
        margin-top: 3vh;
    }
`
