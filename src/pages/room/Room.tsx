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
      <RightBox>
        <Search />
      </RightBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  z-index: -1;
`;

const LeftBox = styled.div`
  width: 600px;
  height: 380px;
  background: teal;
`;

const RightBox = styled.div`
  width: calc(100% - 600px);
  background: rgba(23, 23, 22, 0.5);
`;

export default Room;
