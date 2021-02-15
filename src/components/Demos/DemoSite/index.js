import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import creditCard from 'assets/dynamic-credit-card-form.png'
import todo from 'assets/simple-Todo-List.png'
import marquee from 'assets/dynamic-marquee.png'
import readingProgressBar from 'assets/reading-progress-bar.png'
import debounceThrottle from 'assets/debounce-and-throttle.png'
import ptotos from 'assets/simple-photos-distributor.png'

import { Link as RouterLink } from 'react-router-dom'
import PATHES from 'constants/pathes'

const config = [
  {
    title: 'Fancy Credit Card Form',
    content: '123',
    image: creditCard,
    linkConfig: {
      pathname: PATHES.CREDIT_CARD_FORM,
    },
  },
  {
    title: 'Multifunction Todo List',
    content: '456',
    image: todo,
    linkConfig: {
      pathname: PATHES.TODOLIST,
    },
  },
  {
    title: 'Photo Fetcher',
    content: '789',
    image: ptotos,
    linkConfig: {
      pathname: PATHES.PHOTOS_FETCHER,
    },
  },
  {
    title: 'Dynamic Reading Progress Bar',
    content: '012',
    image: readingProgressBar,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-reading-progress-bar',
    },
  },
  {
    title: 'Debounce And Throttle',
    content: '012',
    image: debounceThrottle,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#debounce-and-throttle',
    },
  },
  {
    title: 'Dynamic Marquee',
    content: '345',
    image: marquee,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-marquee',
    },
  },
]
const useStyles = makeStyles({
  root: {},
  card: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
})

export default function DemoSite() {
  const classes = useStyles()

  return (
    <Grid container spacing={1}>
      {config.map((item) => {
        return (
          <Grid item xs={12} sm={4} key={item.title}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image={item.image} title={item.title} />
                <CardContent>
                  <Typography variant='h6' component='h2'>
                    {item.title}
                  </Typography>
                  {/* <Typography variant='body2' color='textSecondary' component='p'>
                    {item.content}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardAction}>
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
