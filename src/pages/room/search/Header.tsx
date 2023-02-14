import styled from 'styled-components';
import Exit from './Exit';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Title>
      <span>Search</span>
      <Exit />
    </Title>
  );
};

export default Header;

const Title = styled.div`
  background: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 13.5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
`;
