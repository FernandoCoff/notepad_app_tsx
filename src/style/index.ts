import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: 'linear-gradient(90deg,#96a8f2ff 0%, #39d6c4 100%)',
  text: '#0000',
  white: '#fff',
  primary: '#96a8f2ff',
  green: '#40e364ff',
  red: '#ff6961',
  gray1: '#ffffff4d',
  gray2: '#f2f2f2ff',
  gray3: '#fafaff',
  gray4: '#ccc',
}

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'open sans', sans-serif, system-ui;
}

button{
  cursor: pointer;
}
`

export default GlobalStyle
