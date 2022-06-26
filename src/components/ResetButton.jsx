import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 22%;
  background-color: #c4c4c4;
  border: 6px solid #66666630;
  color: #ff0000;
  padding: 15px 38px;
  font-size: 24px;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    background-color: #bbbbbb;
  }
`;

const ResetButton = ({ resetGoals }) => {
  return <StyledButton onClick={resetGoals}>Reset All</StyledButton>;
};
export default ResetButton;
