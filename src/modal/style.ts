import styled, { keyframes } from 'styled-components'
import { colors } from '../style'
import { darken } from 'polished'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 450px;
  animation: ${fadeIn} 0.2s ease-out;
`

export const ModalHeader = styled.header`
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid ${colors.gray4};
  background-color: ${colors.gray2};
  padding: 24px 24px 16px 24px;
  margin-bottom: -8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ModalTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
`

export const CloseButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100px;
  height: 32px;
  border-radius: 16px;
  border: none;
  color: ${colors.white};
  background-color: ${colors.red};
  transition: 0.4s;

  &:hover {
    background-color: ${darken(0.1, colors.red)};
  }
`

export const ModalBody = styled.div`
  padding: 24px;
`
