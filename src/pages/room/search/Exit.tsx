import { useRecoilState } from 'recoil';
import { searchToggleAtom } from '../../../atom';
import styled from 'styled-components';

const Exit = () => {
  const [toggleState, setToggleState] = useRecoilState(searchToggleAtom);

  const exitToggleHandler = () => {
    setToggleState((prev) => false);
  };

  return (
    <ExitWrapper onClick={exitToggleHandler}>
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </ExitWrapper>
  );
};

export default Exit;

const ExitWrapper = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 600;
  display: flex;
  padding: 3px;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;
