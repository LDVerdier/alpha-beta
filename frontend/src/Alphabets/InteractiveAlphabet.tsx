import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GREEK_LETTERS } from './GreekLetters';
import { Cell } from '../views/Table';
import { StyledTable } from '../views/Table';

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

const InteractiveAlphabet = () => {
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

export const InteractiveAlphabetContainer = () => {
  return (
    <>
      <Link to="/">Voir le tableau</Link>
      <InteractiveAlphabet />
    </>
  );
};
