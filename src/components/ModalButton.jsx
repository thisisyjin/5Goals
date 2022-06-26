import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ModalButtonBlock = styled.div``;

const StyledButton = styled.button`
  background-color: #c4c4c4;
  border: 6px solid #66666630;
  color: #000;
  padding: 15px 38px;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #bbbbbb;
  }
`;

const ModalButton = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <ModalButtonBlock>
      <StyledButton onClick={openModal}>Collection</StyledButton>
      <Modal visible={visible} closeModal={closeModal} />
    </ModalButtonBlock>
  );
};
export default ModalButton;
