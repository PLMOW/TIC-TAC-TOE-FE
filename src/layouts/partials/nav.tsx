import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import IconSearch from './SearchToggle';

const Nav = () => {
  return (
    <Wrapper>
      <ThemeToggle />
      <IconSearch />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 0;
  background: rgba(122, 122, 122, 0.2);
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  backdrop-filter: 3px;
`;
