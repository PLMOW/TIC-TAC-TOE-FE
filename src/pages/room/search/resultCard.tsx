import styled from 'styled-components';
import { musicData } from '../../../atom';

const MusicCard = ({ data }: { data: musicData }) => {
  const { title, id, duration, owner, thumbnail } = data;

  return (
    <Container>
      <Wrapper id={id}>
        <Thumbnail thumbnail={thumbnail} />
        <Info>
          <Title>{title}</Title>
          <SubInfo>
            <Duration>{duration}</Duration>
            <Owner>{owner}</Owner>
          </SubInfo>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default MusicCard;

interface ThumbnailProps {
  thumbnail: string;
}

const Container = styled.div`
  position: relative;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  font-weight: 600;
  background: transparent;
  width: 300px;
  border-radius: 3px;
  overflow-y: auto;
`;

const SubInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div``;

const Duration = styled.div`
  font-size: 12.5px;
`;

const Owner = styled.div`
  font-size: 12.5px;
`;

const Wrapper = styled.div<{ id: string }>`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.cardText};
  border-radius: 3px;
  padding: 10px;
  height: 8rem;
  transition: 0.1s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.65);
    cursor: pointer;
  }
`;

const Thumbnail = styled.div<ThumbnailProps>`
  background: url(${(props) => props.thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  width: 200px;
`;
