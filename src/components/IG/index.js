import { useState, useMemo, useEffect } from 'react'
import useSWR from 'swr'
import Button from '@material-ui/core/Button'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Pagination from '@material-ui/lab/Pagination'
import Image from 'material-ui-image'

function getRandom(x) {
  return Math.floor(Math.random() * x) + 1
}

const useStyles = makeStyles((theme) => {
  console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 14 ~ useStyles ~ theme', theme)

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      // flexWrap: 'wrap',
      // justifyContent: 'space-around',
      // overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    // gridList: {
    //   width: 500,
    //   height: 450,
    // },
  }
})

const Images = (props) => {
  const [page, setPage] = useState(1)
  const [picUrl, setPicUrl] = useState(`https://picsum.photos/v2/list?page=${page}`)
  const [jsonUrl, setJsonUrl] = useState(null)
  const classes = useStyles()

  const { data: jsonArr } = useSWR(jsonUrl)
  const { data: pics } = useSWR(picUrl)

  const formatPics = useMemo(
    () =>
      pics?.map((detail, idx) => {
        console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 45 ~ pics?.map ~ idx', idx)
        const [protocol, domainStr] = detail.download_url.split('//')
        const domainArr = domainStr.split('/')
        let [width, height] = domainArr.splice(-2, 2)
        width = 200
        height = 200
        const newUrl = `${protocol}//${domainArr.join('/')}/${width}/${height}`

        let cols = 1
        if (idx % 3 === 0) cols = 2

        return { ...detail, download_url: newUrl, cols }
      }),
    [pics]
  )
  console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 60 ~ Images ~ formatPics', formatPics)

  const handleClick1 = (event, value) => {
    setPage(value)
  }

  const handleClick2 = () => {
    setJsonUrl('https://jsonplaceholder.typicode.com/todos')
  }

  useEffect(() => {
    setPicUrl(`https://picsum.photos/v2/list?page=${page}`)
  }, [page])

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClick1}>
        Fetch Image
      </Button>
      <Button variant='secondary' color='primary' onClick={handleClick2}>
        fetch data
      </Button>
      {/* <Button
        variant='secondary'
        color='primary'
        onClick={() => {
          if (page < 30) return setPage((c) => ++c)
        }}
      >
        +1
      </Button>
      <Button
        variant='secondary'
        color='primary'
        onClick={() => {
          if (page > 1) return setPage((c) => --c)
        }}
      >
        -1
      </Button> */}
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={4}>
          {formatPics?.map((pic) => (
            <GridListTile key={pic.download_url} cols={pic.cols || 1}>
              <Image src={pic.download_url} alt={pic.title} />
            </GridListTile>
          ))}
        </GridList>
        <Pagination count={30} page={page} variant='outlined' color='secondary' onChange={handleClick1} />
        {/* <div>{pics && pics.map((item, idx) => <img key={idx} src={item.download_url} />)}</div> */}
        {jsonArr ? JSON.stringify(jsonArr) : null}
      </div>
    </div>
  )
}

export default Images
