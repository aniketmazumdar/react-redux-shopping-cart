import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 0px 5px 5px #888888;
  padding: 10px 0px;
`;


export const NavLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const NavLink = styled(Link)`
    padding: 0px 15px;
    cursor: pointer;
    text-decoration: none;
    color: #555;
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

export const CartLogoContainer = styled.div`
    width: 120px;
    margin-left: 15px;
    background-color: #DDD;
    padding: 6px;
    margin-top: 10px;
    cursor: pointer;
`

export const CartImage = styled.img`
    width: 35px;
    margin-right: 5px;
`