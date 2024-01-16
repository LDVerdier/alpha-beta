import { useState } from 'react';

import { StyledFlippableCell } from './Cell';
import { GREEK_LETTERS } from './GreekLetters';

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
    </table>
  );
};
