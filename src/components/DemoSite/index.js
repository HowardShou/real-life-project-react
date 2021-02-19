import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink } from 'react-router-dom'
import config from './config'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
}))

export default function DemoSite() {
  const classes = useStyles()
  const [_config, _setConfig] = useState([...config])
  const mediaHandler = useCallback(
    (item) => {
      item.showGif = !item.showGif
      _setConfig([..._config])
    },
    [_config]
  )

  return (
    <Grid container spacing={1} alignContent='flex-start'>
      {_config.map((item, idx) => {
        return (
          <Grid item xs={12} sm={4} key={item.title}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => mediaHandler(item)}>
                <CardMedia className={classes.media} image={item.showGif ? item.gif : item.image} title={item.title} />
                <CardContent>
                  <Typography variant='h6' component='h2'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    click me or button below to switch film / image
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardAction}>
                <Button size='small' color='primary' onClick={() => mediaHandler(item)}>
                  {!item.showGif ? 'Film' : 'Image'}
                </Button>
                <Button size='small' color='primary' component={RouterLink} to={item.linkConfig}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
