import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: left;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
  :hover {
    text-decoration: underline;
  }
`;

const StyledHomeLink = styled(StyledLink)`
  margin-right: 32px;
  :hover {
    text-decoration: none;
  }
`;

const HomeLink = () => {
  return <StyledHomeLink to="/">Accueil</StyledHomeLink>;
};

export const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <HomeLink />
        <StyledLink to="/alphabet">Alphabet</StyledLink>
        <StyledLink to="/entrainement">Entrainement</StyledLink>
        <StyledLink to="/vocabulaire">Vocabulaire</StyledLink>
      </Nav>
    </StyledHeader>
  );
};
