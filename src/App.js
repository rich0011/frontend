import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppRouter from './components/AppRouter/AppRouter'
import { theme } from './theme'

function App () {
  
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
