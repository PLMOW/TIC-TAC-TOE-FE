import { useRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Player = () => {
  const playerRef = useRef(null);
  const URL = 'https://www.youtube.com/watch?v=ysz5S6PUM-U' as const;

  return (
    <Wrapper>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
};

export default Player;

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: skew(0deg) rotate(0deg);
`;
