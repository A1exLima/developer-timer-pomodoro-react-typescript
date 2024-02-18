import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"

//import { Home } from "./pages/home"
import { History } from './pages/history'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <History/>
    </ThemeProvider>
  </React.StrictMode>,
)
