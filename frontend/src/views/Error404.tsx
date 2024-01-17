import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8px;
`;

export const Error404 = () => {
  return (
    <Error404Container>
      <div>La page demandée n'existe pas</div>
      <Link to="/">Retour à l'accueil</Link>
    </Error404Container>
  );
};
