import styled from 'styled-components'
import { colors } from '../../style'
import { darken } from 'polished'

interface PropsButton {
  $variant: 'edit' | 'delete'
}

export const Note = styled.div`
  padding: 24px;
  width: 100%;
  background-color: ${colors.gray3};
  border: 1px solid ${colors.gray4};
  border-radius: 8px;

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
  }
`
export const ButtonsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 16px;
`

export const Button = styled.button<PropsButton>`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100px;
  height: 32px;
  border-radius: 16px;
  border: none;
  background-color: ${(PropsButton) =>
    PropsButton.$variant === 'delete' ? `${colors.red}` : `${colors.gray4}`};
  color: ${colors.white};
  transition: 0.4s;

  &:hover {
    background-color: ${(PropsButton) =>
      PropsButton.$variant === 'delete'
        ? `${darken(0.1, colors.red)}`
        : `${darken(0.1, colors.gray4)}`};
  }
`
