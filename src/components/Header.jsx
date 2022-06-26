import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/svg/check.svg';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 40px;
`;

const HeaderTitle = styled(Link)`
  font-size: 42px;
  color: #fff;
  text-decoration: none;
  position: relative;

  &::after {
    position: absolute;
    display: block;
    content: '?';
    top: -20%;
    left: 40%;
    background-color: #fff;
    color: #080080;
    padding: 10px 18px;
    visibility: hidden;
  }

  &:hover {
    &::after {
      visibility: visible;
    }
  }
`;

const StyledCheck = styled(Check)`
  margin-right: 16px;
  width: 28px;
  height: 28px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledCheck />
      <HeaderTitle to="/tutorial">Today's 5 Goals</HeaderTitle>
    </HeaderContainer>
  );
};
export default Header;
