import { useState } from 'react';
import styled from 'styled-components';

import { Cell } from '../views/Table';
import { StyledTable } from '../views/Table';
import { GREEK_LETTERS } from './GreekLetters';

const StyledFlippableCell = styled(Cell)`
  cursor: pointer;
  width: 40%;
  font-size: 32px;
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
              <tr key={index}>
                <FlippableCell recto={greekLowercase} verso={frenchLowercase} />
                <FlippableCell recto={greekUppercase} verso={frenchUppercase} />
              </tr>
            );
          },
        )}
      </tbody>
    </StyledTable>
  );
};
