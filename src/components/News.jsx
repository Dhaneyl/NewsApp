import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export const News = ({newN}) => {

    const {urlToImage, url, title, description, source} = newN
  return (
    <Grid item md={6} lg={4} >
            <Card variant='outlined' sx={{border:5, borderColor: 'primary.main'}}>
                {urlToImage && (
                    <CardMedia
                        component="img"
                        alt={`Images of the news ${title}`}
                        image={urlToImage}
                        height={'250'}
                    />
                )}

                <CardContent>
                    <Typography variant='body1' color="secondary">
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component="div">
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none',
                            color: 'error.main'
                        }}
                    >Read News</Link>
                </CardActions>
            </Card>
        </Grid>
  )
}
