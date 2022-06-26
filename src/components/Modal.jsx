import styled from 'styled-components';
import Trophy from './Trophy';
import Empty from './Empty';

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: #00000060;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  position: relative;
  width: 900px;
  height: 400px;
  background-color: #c4c4c4;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-title {
    width: 100%;
    background-color: #080080;
    outline: 6px solid #66666650;
    padding: 4px;
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;

    &::after {
      content: '▪︎';
      font-size: 20px;
      display: inline-block;
      margin-left: 10px;
    }
    &::before {
      content: '▪︎';
      font-size: 20px;
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

const TrophyBlock = styled.div`
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const AwardNumber = styled.div`
  color: #000;
  font-size: 20px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 8%;
  right: 7%;
  font-size: 18px;
  padding: 10px 50px;
  border: 1.5px solid #000;
  background-color: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #bbbbbb;
  }
`;

const Modal = ({ visible, closeModal }) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <ModalBlock>
        <h3 className="modal-title">Awards</h3>
        <TrophyBlock>
          {[1, 2, 3, 4].map((i) => (
            <Trophy />
          ))}
          {[0, 0, 0].map((i) => (
            <Empty />
          ))}
        </TrophyBlock>
        <AwardNumber>4 / 7</AwardNumber>
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModalBlock>
    </FullScreen>
  );
};
export default Modal;
