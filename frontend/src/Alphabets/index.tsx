import styled from 'styled-components';

import { InteractiveAlphabet } from './InteractiveAlphabet';
import { StaticAlphabet } from './StaticAlphabet';

const StyledAlphabets = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px;
`;

export const Alphabets = () => {
  return (
    <StyledAlphabets>
      <StaticAlphabet />
      <InteractiveAlphabet />
    </StyledAlphabets>
  );
};
