import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';

export const Backdrop = styled.div`
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overscroll-behavior: contain;
`;

export const ModalStyled = styled.div`
  background: rgb(64, 46, 155);
  background: radial-gradient(
    circle,
    rgba(64, 46, 155, 1) 5%,
    rgba(76, 50, 113, 1) 100%
  );
  width: 100vw;
  min-height: 110vh;
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: 40px 72px;

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(135)};
    min-height: ${({ theme }) => theme.spacing(145)};
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

export const IconCloseModal = styled.div`
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};

  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  &:hover {
    cursor: pointer;
  }
`;

export const ExitModalBtn = styled(VscClose)`
  width: ${({ theme }) => theme.spacing(7.4)};
  height: ${({ theme }) => theme.spacing(7.4)};
  &:hover {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
`;
