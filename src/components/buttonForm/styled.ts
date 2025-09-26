import styled, { keyframes } from 'styled-components'
import { colors } from '../../style'
import { darken } from 'polished'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  border: 4px solid ${colors.gray1};
  border-top: 4px solid ${colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 8px;
  border: none;
  border-radius: 16px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${darken(0.1, colors.green)};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
