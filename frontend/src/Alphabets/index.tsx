import { useState } from 'react';
import styled from 'styled-components';

import { GREEK_LETTERS } from './GreekLetters';

const Cell = styled.th`
  border: 1px black solid;
  padding: 4px;
`;
export const StaticAlphabet = () => {
  return (
    <table>
      <tbody>
        {GREEK_LETTERS.map(
          ({
            name,
            greekLowercase,
            frenchLowercase,
            greekUppercase,
            frenchUppercase,
          }) => {
            return (
              <tr>
                <Cell>{name}</Cell>
                <Cell>{greekLowercase}</Cell>
                <Cell>{frenchLowercase}</Cell>
                <Cell>{greekUppercase}</Cell>
                <Cell>{frenchUppercase}</Cell>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

const StyledFlippableCell = styled(Cell)`
  cursor: pointer;
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
    <table>
      <tbody>
        {GREEK_LETTERS.map(
          ({
            frenchLowercase,
            frenchUppercase,
            greekLowercase,
            greekUppercase,
          }) => {
            return (
              <tr>
                <FlippableCell recto={greekLowercase} verso={frenchLowercase} />
                <FlippableCell recto={greekUppercase} verso={frenchUppercase} />
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

export const StyledAlphabets = styled.div`
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
