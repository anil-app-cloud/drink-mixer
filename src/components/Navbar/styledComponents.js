import styled from 'styled-components'

export const MainNavbar = styled.div`
    position: fixed;
    top: 0;
    min-width: 100vw;
    min-height: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    paddind: 20px;
    background-color: #ada9a8;
    color: white;
    over-flow: hidden;
    gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
`
export const LinkItem = styled.p`
    margin: 5px;
    color: white;
    text-decoration: none;

    @media (min-width: 768px){
      margin-right: 20px;
    }
`

export const NavItems = styled.div`
  margin-left: auto;
  margin-right: 1%;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  aligin-items: center;
  background-color: transparent;
  color: white;
  @media (min-width:768px){
      margin-left: auto;
    }
`

export const SearchInput = styled.input`
  width: 100%;
  display:flex;
  border: 0px none;
  border-radius: 5px;
  aligin-items:center;
  justify-content: center;

  &:focus {
  outline: none;
}


`

export const SearchInputForm = styled.form`
  width: 60%;
  height: 30px;
  border: 0px none;
  border-radius: 5px;
  display:flex;
  aligin-items:center;
  justify-content: center;

  &:focus {
  outline: none;
`
export const Applogo = styled.h1`
  font-size: 13px;
  margin-left: 20%;
`
