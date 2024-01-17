import { Link } from 'react-router-dom';

import { Cell, StyledTable } from '../views/Table';
import { GREEK_LETTERS } from './GreekLetters';

const StaticAlphabet = () => {
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

export const StaticAlphabetContainer = () => {
  return (
    <>
      <Link to="/exercice">Faire l'exercice</Link>
      <StaticAlphabet />
    </>
  );
};
