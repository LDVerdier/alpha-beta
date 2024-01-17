import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SummaryContainer = styled.ul`
  margin: 8px;
`;
const SummaryItem = styled.li`
  margin: 4px 0;
`;

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryItem>
        <Link to="/alphabet">Alphabet</Link>
      </SummaryItem>
      <SummaryItem>
        <Link to="/entrainement">Entrainement</Link>
      </SummaryItem>
      <SummaryItem>
        <Link to="/vocabulaire">Vocabulaire</Link>
      </SummaryItem>
    </SummaryContainer>
  );
};
