import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchDataAtom } from './atom';
import styled from 'styled-components';
import sendGetRequest from './utils/req/sendGet';
import API from './utils/constants/apiConstant';

const Search = () => {
  const [searchData, setSearchData] = useRecoilState(searchDataAtom);
  const [inputValue, setInputValue] = useState('');
  const { ROUTE } = API;

  const getSearch = async () => {
    const response = await sendGetRequest({
      endPoint: `${ROUTE}/api/music`,
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

  return (
    <>
      <Form onSubmit={submitHandler}>
        <SearchInput
          type="text"
          placeholder="search"
          onChange={changeHandler}
        />
        <ToggleBtn onClick={getSearch}>getSearch</ToggleBtn>
      </Form>
      <div>
        백엔드에서 가져온 데이터입니다 :{searchData ? 123 : '데이터 없음'}
        <Board>
          {searchData.map(({ title, id, duration, owner, thumbnail }) => {
            return (
              <Wrapper key={id}>
                <img src={thumbnail} />
                <div>{title}</div>
                <div>{id}</div>
                <div>{duration}</div>
                <div>{owner}</div>
              </Wrapper>
            );
          })}
        </Board>
      </div>
    </>
  );
};

export default Search;

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

const Board = styled.div`
  overflow: auto;
  background: rgba(20, 20, 20, 0.65);
  border-radius: 5px;
  padding: 10px;
  height: 50vh;
`;

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
