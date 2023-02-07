import styled from 'styled-components';
import { musicData } from '../../atom';

const MusicCard = ({ title, id, duration, owner, thumbnail }: musicData) => {
  return (
    <Wrapper key={id}>
      <img src={thumbnail} />
      <div>{title}</div>
      <div>{id}</div>
      <div>{duration}</div>
      <div>{owner}</div>
    </Wrapper>
  );
};

export default MusicCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  backdrop-filter: blur(3px);
  font-weight: 600;

  width: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
