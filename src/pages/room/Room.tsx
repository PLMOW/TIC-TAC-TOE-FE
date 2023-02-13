import styled from 'styled-components';
import Search from './search/Search';
import Player from './player/Player';

const Room = () => {
  return (
    <Wrapper>
      <Player />
      <div>Room</div>
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Room;
