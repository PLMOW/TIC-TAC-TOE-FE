import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { musicData } from '../../../atom';
import MusicCard from './resultCard';
import loadingGIF from '../../../assets/img/loading.gif';
import searchGooseImgage from '../../../assets/img/searchGoose.png';

interface searchData {
  searchData: musicData[];
  isLoading: boolean;
}

const ResultBoard = ({ searchData, isLoading }: searchData) => {
  return (
    <AnimatePresence>
      {!searchData.length ? (
        <LoadingFilter isLoading={isLoading}>
          <AnimatePresence>
            {isLoading ? (
              <Loading>
                <LoadingGif
                  variants={loadingVar}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Image src={loadingGIF} />
                </LoadingGif>
              </Loading>
            ) : null}
          </AnimatePresence>
          <Image src={searchGooseImgage} />
        </LoadingFilter>
      ) : (
        <Cards>
          {searchData.map((data, i) => {
            return <MusicCard data={data} />;
          })}
        </Cards>
      )}
    </AnimatePresence>
  );
};

export default ResultBoard;

const Image = styled.image<{ src: string }>``;

interface FilterProps {
  isLoading: boolean;
}

const LoadingFilter = styled(motion.div)<FilterProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding-left: 50px;
  background: ${(props) =>
    props.isLoading ? 'rgba(12, 12, 12, 0.85)' : 'rgba(100, 100, 100, 0.5)'};
  transition: ease-in-out 0.25s;
  height: 100%;
  overflow: hidden;

  img {
    transition: ease-in-out 0.25s;
    object-fit: cover;
    filter: ${(props) =>
      props.isLoading
        ? 'grayscale(100%) brightness(0.25) invert(100%) blur(0px) drop-shadow(5px 5px 10px bisque)'
        : 'grayscale(100%) brightness(0.25) invert(0%) blur(0px) drop-shadow(0px 0px 2px black)'};
  }
`;

const loadingVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const LoadingGif = styled(motion.div)`
  width: 250px;
  height: 250px;
`;

const Loading = styled.div`
  position: absolute;
  left: 100px;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  overflow-y: auto;
  padding-right: 10px;
`;
