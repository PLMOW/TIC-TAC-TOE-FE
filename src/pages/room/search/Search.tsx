import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchDataAtom, loadingAtom, searchToggleAtom } from '../../../atom';
import styled from 'styled-components';
import sendGetRequest from '../../../utils/req/sendGet';
import API from '../../../utils/constants/apiConstant';
import ResultBoard from './resultBoard';
import { AnimatePresence, motion } from 'framer-motion';

const Search = () => {
  const [searchData, setSearchData] = useRecoilState(searchDataAtom);
  const [isLoading, setLoading] = useRecoilState<boolean>(loadingAtom);
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleAtom);
  const [inputValue, setInputValue] = useState('');
  const { ROUTE, END_POINT } = API;

  const getSearch = async () => {
    const response = await sendGetRequest({
      endPoint: `${ROUTE + END_POINT.SEARCH_MUSIC}`,
      query: inputValue,
    });
    setSearchData((prev) => response);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSearch();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue((prev) => value);
  };

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
              <Form onSubmit={submitHandler}>
                <SearchInput
                  type="text"
                  placeholder="search"
                  onChange={changeHandler}
                />
                <ToggleBtn onClick={getSearch}>getSearch</ToggleBtn>
              </Form>
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

const Container = styled(motion.div)`
  position: absolute;
  top: 15%;
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

const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  transition: ease-in-out 0.2s;

  :hover {
    cursor: pointer;
    background: whitesmoke;
    color: #2b2b2b;
  }
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(111, 111, 111, 0.1);
  box-shadow: 0px 0px 5px rgba(111, 111, 111, 0.3);
  transition: ease-in-out 0.15s;
  color: ${({ theme }) => theme.text};

  :focus {
    border: none;
    outline: none;
    background: rgba(111, 111, 111, 0.05);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 10px;
  }
`;
