import styled from 'styled-components';

export const Cell = styled.th`
  border: 1px black solid;
  padding: 4px;
`;
export const StyledFlippableCell = styled(Cell)`
  cursor: pointer;
  width: 40px;
`;
