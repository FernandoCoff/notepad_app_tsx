import styled from 'styled-components'
import { colors } from '../../style'

export const FormNote = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
`

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 2px solid ${colors.gray4};
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`

export const Textarea = styled.textarea`
  padding: 8px;
  font-size: 16px;
  height: 100px;
  resize: none;
  border: 2px solid ${colors.gray4};
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`

export const InfoMessageRed = styled.p`
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: ${colors.red};
  font-weight: 600;
`
