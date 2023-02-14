import styled from 'styled-components';

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

export default SearchBarIcon;

interface searchCallback {
  clickHandler: () => Promise<void>;
}

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
