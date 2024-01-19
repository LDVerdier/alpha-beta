import { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const StyledMain = styled.main``;

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer>&copy; 2024 - Alpha Beta</Footer>
    </LayoutContainer>
  );
};
