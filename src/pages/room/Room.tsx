import styled from 'styled-components';
import Search from './search/Search';
import Player from './player/Player';

const Room = () => {
  return (
    <Wrapper>
      {/* LeftBox */}
      <LeftBox>
        <Player />
      </LeftBox>
      {/* RightBox */}
      <RightBox></RightBox>
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const LeftBox = styled.div`
  width: 500px;
`;

const RightBox = styled.div`
  width: calc(100% - 500px);
  background: rgba(23, 23, 22, 0.5);
`;

export default Room;
