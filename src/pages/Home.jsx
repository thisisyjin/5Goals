import Header from '../components/Header';
import Timer from '../components/Timer';
import Progress from '../components/Progress';
import ModalButton from '../components/ModalButton';

import styled from 'styled-components';

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBlock = styled.div`
  display: flex;
  position: fixed;
  bottom: 10%;
  right: 8%;
`;

const Home = () => {
  return (
    <HomeBlock>
      <Header />
      <Timer />
      <Progress />
      <ButtonBlock>
        <ModalButton />
      </ButtonBlock>
    </HomeBlock>
  );
};
export default Home;
