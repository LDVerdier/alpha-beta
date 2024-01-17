import { Cell, StyledTable } from '../views/Table';
import { GREEK_LETTERS } from './GreekLetters';

export const StaticAlphabet = () => {
  return (
    <StyledTable>
      <tbody>
        {GREEK_LETTERS.map(
          (
            {
              name,
              greekLowercase,
              frenchLowercase,
              greekUppercase,
              frenchUppercase,
            },
            index,
          ) => {
            return (
              <tr key={index}>
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
    </StyledTable>
  );
};
