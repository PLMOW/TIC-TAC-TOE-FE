import styled from 'styled-components';
import React, { useState } from 'react';
import API from '../../../utils/constants/apiConstant';
import sendGetRequest from '../../../utils/req/sendGet';
import { searchDataAtom } from '../../../atom';
import { useRecoilState } from 'recoil';
import SearchBarIcon from './SearchBtn';

const SearchBar = () => {
  const { ROUTE, END_POINT } = API;
  const [searchData, setSearchData] = useRecoilState(searchDataAtom);
  const [inputValue, setInputValue] = useState('');

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

  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" placeholder="search" onChange={changeHandler} />
      <SearchBarIcon clickHandler={getSearch} />
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  display: flex;
  margin-bottom: 15px;
`;

const Input = styled.input.attrs({ type: 'text' })`
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 7px 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  transition: ease-in-out 0.1s;
  background: rgba(222, 222, 222, 0.7);
  color: #111;

  :hover {
    cursor: pointer;
  }

  :focus {
    background: rgba(222, 222, 222, 1);
    outline: none;
    color: black;
  }
`;

interface searchCallback {
  clickHandler: () => Promise<void>;
}
