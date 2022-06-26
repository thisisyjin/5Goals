import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TutorialBlock = styled.div`
  margin: 0 14%;
  background-color: #c4c4c4;
  height: 100vh;
  padding: 25px 20px;
`;

const TutorialTitle = styled.h1`
  font-size: 32px;
  color: #000;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 28px;
`;

const InfoBlock = styled.div`
  position: relative;
  background-color: #666;
  padding: 30px 120px;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin: 0 20%;
  margin-bottom: 28px;
`;

const StyledImg = styled.img`
  display: block;
  width: ${(props) => (props.small ? '70px' : '100px')};
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${(props) => props.trans && '#ffffff20'};
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Link)`
  background-color: #080080;
  color: #fff;
  border: 6px solid #66666660;
  width: 200px;
  padding: 12px 0;
  text-align: center;
  letter-spacing: 0.05em;
  font-size: 22px;

  &:hover {
    opacity: 0.8;
  }
`;

const Tutorial = () => {
  return (
    <TutorialBlock>
      <TutorialTitle>Tutorial</TutorialTitle>
      <InfoBlock>
        Write today’s goals <br /> and press <span className="red">ENTER!</span>
        <StyledImg src="img/example.gif" alt="example" trans />
      </InfoBlock>
      <InfoBlock>
        When you complete goals, <br />
        <span className="red">click here</span> to move!
        <StyledImg src="img/clickHere.png" alt="ball" />
      </InfoBlock>
      <InfoBlock right>
        If you want edit it,
        <br />
        <span className="red">Double-click</span> that text!
      </InfoBlock>
      <InfoBlock>
        If you achieve 5 goals,
        <br />
        you’ll get an <span className="yellow">award!</span>
        <StyledImg src="img/trophy.png" alt="trophy" small />
      </InfoBlock>
      <ButtonBlock>
        <StyledButton to="/">Close</StyledButton>
      </ButtonBlock>
    </TutorialBlock>
  );
};
export default Tutorial;
