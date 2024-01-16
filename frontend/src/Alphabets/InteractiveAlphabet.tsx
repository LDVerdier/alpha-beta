import { useState } from 'react';
import styled from 'styled-components';

import { Cell } from './Cell';
import { GREEK_LETTERS } from './GreekLetters';

const StyledFlippableCell = styled(Cell)`
  cursor: pointer;
  width: 40%;
  font-size: 32px;
`;

const StyledTable = styled.table`
    width 100%;
    max-width: 375px;
    margin: 8px;
`;

const StyledRow = styled.tr`
  width: 100%;
`;

type FlippableCellProps = { recto: string; verso: string };

const FlippableCell = ({ recto, verso }: FlippableCellProps) => {
  const [isShowingRecto, setIsShowingRecto] = useState<boolean>(true);
  const flip = () => {
    setIsShowingRecto(!isShowingRecto);
  };

  return (
    <StyledFlippableCell onClick={flip}>
      {isShowingRecto ? recto : verso}
    </StyledFlippableCell>
  );
};

export const InteractiveAlphabet = () => {
  return (
    <StyledTable>
      <tbody>
        {GREEK_LETTERS.map(
          (
            {
              frenchLowercase,
              frenchUppercase,
              greekLowercase,
              greekUppercase,
            },
            index,
          ) => {
            return (
              <StyledRow key={index}>
                <FlippableCell recto={greekLowercase} verso={frenchLowercase} />
                <FlippableCell recto={greekUppercase} verso={frenchUppercase} />
              </StyledRow>
            );
          },
        )}
      </tbody>
    </StyledTable>
  );
};
