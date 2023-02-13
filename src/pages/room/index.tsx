import styled from 'styled-components';
import Search from './search';

const Room = () => {
  return (
    <Wrapper>
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
