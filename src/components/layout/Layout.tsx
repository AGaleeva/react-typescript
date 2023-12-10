import { useLocation } from 'react-router-dom';
import { LayoutProps } from "./types";
import { LayoutWrapper, Header, Main, Footer, NavContainer, StyledLink } from "./styles";

function Layout({children}: LayoutProps) {

  const location = useLocation();

  return (
    <LayoutWrapper>
      <Header>
        Logo
        <NavContainer>
          <StyledLink style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'white' })} to="/">Home</StyledLink>
          <StyledLink style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'white' })} to="/users">Users</StyledLink>
          <StyledLink style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'white' })} to="/clients">Clients</StyledLink>
          <StyledLink style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'white' })} to="/about">About</StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  );
}

export default Layout;

