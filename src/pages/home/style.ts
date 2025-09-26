import styled from 'styled-components'
import { darken } from 'polished'
import { colors } from '../../style'

export const Body = styled.div`
  width: 100vw;
  height: 100dvh;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  max-width: 80vw;
  max-height: 80dvh;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};

  @media (max-width: 767px) {
    max-width: 100vw;
    max-height: 100dvh;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${colors.gray3};
  border-bottom: 1px solid ${colors.gray4};

  h2 {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }
`
export const NoteList = styled.ul`
  list-style: none;
  padding: 24px;
`
export const NewNoteButton = styled.button`
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 16px;
  background-color: ${colors.green};
  color: ${colors.white};
  transition: 0.4s;

  &:hover {
    background-color: ${darken(0.1, colors.green)};
  }
`
