import { createTheme } from "@mui/material";

import React from 'react'

export const myTheme = createTheme({
    palette:{
        primary:{
            main: '#ECC5FB' 
        },
        secondary:{
            main: '#A084CA'
        },
        warning:{
            main:'#9FC9F3'
        },
        error:{
            main:'#483838'
        }
    }
}) 
