import { useRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Player = () => {
  const playerRef = useRef(null);

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
  height: 380px;
  width: 100%;
`;
