import { useState, useMemo, useEffect, useCallback } from 'react'
import useSWR from 'swr'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Pagination from '@material-ui/lab/Pagination'
import Image from 'material-ui-image'
import Box from '@material-ui/core/Box'
import LoadingCircle from 'components/LoadingCircle'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function getRandom(x) {
  return Math.floor(Math.random() * x) + 1
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
    },
  }
})

const igStyle = {
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
}

const PhotoFetcher = (props) => {
  const theme = useTheme()
  const onlyXS = useMediaQuery(theme.breakpoints.only('xs'))
  const onlySM = useMediaQuery(theme.breakpoints.only('sm'))
  const SMBelow = useMediaQuery(theme.breakpoints.down('sm'))
  const [page, setPage] = useState(1)
  const [picUrl, setPicUrl] = useState(`https://picsum.photos/v2/list?page=${page}`)
  const classes = useStyles()

  const { data: pics, isValidating } = useSWR(picUrl)

  const formatPics = useMemo(
    () =>
      pics?.map((detail, idx) => {
        const [protocol, domainStr] = detail.download_url.split('//')
        const domainArr = domainStr.split('/')
        let [width, height] = domainArr.splice(-2, 2)
        width = 600
        height = 600
        const newUrl = `${protocol}//${domainArr.join('/')}/${width}/${height}`

        let cols = 1
        if (onlySM) cols = 2
        else if (onlyXS) cols = 4
        else if ((idx + 1) % 3 === 0) cols = 2

        return { ...detail, download_url: newUrl, cols }
      }),
    [pics, onlyXS, onlySM]
  )

  const handleClick = useCallback((type, payload) => {
    switch (type) {
      case 'normal':
        setPage(payload)
        break
      case 'random':
        setPage(getRandom(30))
        break
      default:
        break
    }
  }, [])

  useEffect(() => {
    setPicUrl(`https://picsum.photos/v2/list?page=${page}`)
  }, [page])

  return (
    <Box display='block' width='100%'>
      <Box mb={2}>
        <Grid container spacing={1}>
          <Grid container item xs={12} sm={6} justify={onlyXS ? 'center' : 'flex-start'}>
            <Box mb={onlyXS ? 2 : 0}>
              <Button variant='contained' color='primary' onClick={(e, value) => handleClick('random', value)}>
                Fetch Random Page
              </Button>
            </Box>
          </Grid>
          <Grid container item xs={12} sm={6} justify={onlyXS ? 'center' : 'flex-end'}>
            <Pagination
              count={30}
              page={page}
              color='primary'
              size={SMBelow ? 'small' : 'medium'}
              onChange={(e, value) => handleClick('normal', value)}
            />
          </Grid>
        </Grid>
      </Box>
      {isValidating ? (
        <LoadingCircle />
      ) : (
        <div className={classes.root}>
          <GridList cellHeight={200} className={classes.gridList} cols={4}>
            {!formatPics
              ? []
              : formatPics?.map((pic) => (
                  <GridListTile key={pic.download_url} cols={pic.cols || 1}>
                    <Image src={pic.download_url} alt={pic.title} style={igStyle} />
                  </GridListTile>
                ))}
          </GridList>
        </div>
      )}
    </Box>
  )
}

export default PhotoFetcher
