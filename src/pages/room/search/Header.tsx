import styled from 'styled-components';
import Exit from './Exit';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <span>Search</span>
        <Exit />
      </Title>
    </Wrapper>
  );
};

export default Header;

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
