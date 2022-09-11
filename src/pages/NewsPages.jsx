import { Container, Grid, Typography } from "@mui/material"
import { Form, NewsList } from "../components"

import { NewsProvider } from "../context/NewsProvider"



export const NewsPages = () => {
  return (
    <NewsProvider>
    <Container  >
    <header>
    <Typography align="center" marginY={5} component='h1' variant='h3' >
      News Searching App
    </Typography>
     
    </header>
   <Grid container
     direction="row"
     justifyContent="center"
     alignItems="center"
   >
    <Grid item md={6} xs={12} lg={4}>
        <Form/>
    </Grid>
   </Grid>

   <NewsList/>
     
    </Container>
    </NewsProvider>
  )
}
