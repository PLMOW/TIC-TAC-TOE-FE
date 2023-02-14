import styled from 'styled-components';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import API from '../../../utils/constants/apiConstant';
import sendGetRequest from '../../../utils/req/sendGet';
import { searchDataAtom } from '../../../atom';
import { useRecoilState } from 'recoil';

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
const SearchBarIcon = ({ clickHandler }: searchCallback) => {
  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </IconWrapper>
  );
};

const IconWrapper = styled.button`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 3px;
  font-weight: 600;
  width: 40px;
  height: 35px;
  background: whitesmoke;
  transition: 0.15s ease-in-out;
  color: black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  :hover {
    background: #111;
    color: whitesmoke;
    cursor: pointer;
  }
`;
