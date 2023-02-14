import { useRecoilState } from 'recoil';
import { searchDataAtom, searchToggleAtom } from '../../../atom';
import styled from 'styled-components';
import ResultBoard from './resultBoard';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import SearchBar from './SearchBar';

const Search = () => {
  const [searchData, setSearchData] = useRecoilState(searchDataAtom);
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleAtom);

  const overlayToggleHandler = () => {
    setSearchToggle((prev) => false);
  };

  return (
    <AnimatePresence>
      {searchToggle ? (
        <>
          <Overlay onClick={overlayToggleHandler}></Overlay>

          <Container
            variants={containerVar}
            initial="from"
            animate="to"
            exit="exit"
          >
            <Wrapper>
              <Header />
              <SearchBar />
              <ResultBoard searchData={searchData} isLoading={false} />
            </Wrapper>
          </Container>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Search;

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: calc(50% - 285px);
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;
  min-height: 100px;
  //height: 80vh;
  max-height: 80vh;
`;

const Wrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 570px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 3px 15px rgba(111, 111, 111, 0.5);
`;

const containerVar = {
  from: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0 },
  },
  to: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0 },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.1 },
  },
};
