import { FormControl,  Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { CATEGORIES, COUNTRY } from '../helpers'

import { useNews } from '../hooks/useNews'



export const Form = () => {
   const {category, handleChangeCategory, country, handleChangeCountry} =  useNews()
  return (
    <Grid>
    <form>
        <FormControl fullWidth>
            {/* Category Query */}
            <InputLabel>Category</InputLabel>
            <Select
            label='Category'
            onChange={handleChangeCategory}
            value={category}
            
            >
            {CATEGORIES.map(category =>(
                <MenuItem key={category.value} value={category.value} sx={{':hover':{backgroundColor: 'primary.main', opacity:0.9} }}>
                     {category.label}
                 </MenuItem>
                ))}
            </Select>
                 {/*Button  */}
            
            
           
            </FormControl>
    </form>
    </Grid>
  )
}
