import styled from 'styled-components';

const Text = styled.div<{ color?: string }>`
  color: ${({ color }) => color ?? 'black'};
`;

function App() {
  return <Text color="red">Alpha beta app is running well!</Text>;
}

export default App;
