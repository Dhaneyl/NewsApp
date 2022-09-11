import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { myTheme } from './myTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={myTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
  
}
