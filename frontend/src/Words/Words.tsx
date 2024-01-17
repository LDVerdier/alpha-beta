import styled from 'styled-components';

import { Cell, StyledTable } from '../views/Table';
import { GREEK_WORDS, GreekWord } from './data';

const StyledPlayButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PlayButton = ({ pronunciation }: { pronunciation: string }) => {
  const pronounce = () => {
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    speechSynthesis.speak(utterance);
  };

  return <StyledPlayButton onClick={pronounce}>{'\u25B6'}</StyledPlayButton>;
};

const Word = ({ word }: { word: GreekWord }) => {
  return (
    <tr>
      <Cell>
        <PlayButton pronunciation={word.pronunciation} />
      </Cell>
      <Cell>{word.spelling}</Cell>
      <Cell>{word.translation}</Cell>
    </tr>
  );
};

export const Words = () => {
  return (
    <>
      <StyledTable>
        <tbody>
          {GREEK_WORDS.map((greekWord) => {
            return <Word key={greekWord.spelling} word={greekWord} />;
          })}
        </tbody>
      </StyledTable>
    </>
  );
};
