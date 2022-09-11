import { Grid, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import React from 'react'
import { useNews } from '../hooks/useNews'
import { News } from './News'

export const NewsList = () => {
    const {news, totalNews, handleChangePage, page} = useNews()
    const totalPages = Math.ceil(totalNews / 20)
  return (
    <>
    <Typography
      textAlign='center'
      marginY={5}
      variant={'h3'}
      component="h2"
    >
      Latest News!
    </Typography>

    <Grid container spacing={2}>
    { news.map(newN =>(
       <News newN={newN} key={newN.url}/>
    ))}
    </Grid>
    <Stack 
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination
                    count={totalPages} 
                    color="primary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>

    </>
    
  )
}
