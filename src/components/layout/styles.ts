import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";
import { colors } from 'styles/colors'

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;  
`;

export const StyledLink = styled(NavLink)`
  color: ${colors.white};
  font-size: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  color: ${colors.black};
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;
