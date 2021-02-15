import { useState, useMemo, useEffect, useCallback } from 'react'
import useSWR from 'swr'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Pagination from '@material-ui/lab/Pagination'
import Image from 'material-ui-image'
import Box from '@material-ui/core/Box'
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
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'))
  const matchesSM = useMediaQuery(theme.breakpoints.only('sm'))
  const [page, setPage] = useState(1)
  const [picUrl, setPicUrl] = useState(`https://picsum.photos/v2/list?page=${page}`)
  const [jsonUrl, setJsonUrl] = useState(null)
  const classes = useStyles()

  const { data: jsonArr } = useSWR(jsonUrl)
  const { data: pics } = useSWR(picUrl)

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
        if (matchesSM) cols = 2
        else if (matchesXS) cols = 4
        else if ((idx + 1) % 3 === 0) cols = 2

        return { ...detail, download_url: newUrl, cols }
      }),
    [pics, matchesXS, matchesSM]
  )

  const handleClick1 = useCallback((type, payload) => {
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

  const handleClick2 = () => {
    setJsonUrl('https://jsonplaceholder.typicode.com/todos')
  }

  useEffect(() => {
    setPicUrl(`https://picsum.photos/v2/list?page=${page}`)
  }, [page])

  return (
    <Box display='block' width='80%'>
      <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
        <Button variant='contained' color='primary' onClick={(e, value) => handleClick1('random', value)}>
          Fetch Random Page
        </Button>

        <Pagination count={30} page={page} color='primary' onChange={(e, value) => handleClick1('normal', value)} />
      </Box>
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
        {jsonArr ? JSON.stringify(jsonArr) : null}
      </div>
    </Box>
  )
}

export default PhotoFetcher
