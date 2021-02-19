import { useMemo } from 'react'
import { SWRConfig } from 'swr'
import routes from './router'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import SwitchRoutesContainer from 'components/RouterComponents'
import Box from '@material-ui/core/Box'
import { fetcher } from 'utils'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import PATHES from './constants/pathes'
import useDynamicHeaderHeight from 'hooks/useDynamicHeaderHeight'
import './App.scss'

const useStyle = makeStyles((theme) => ({
  route_container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '20px',
    height: (prop) => prop.height,
    overflow: 'auto',
    backgroundColor: '#fff',
    transition: 'background-color 250ms ease-in',
  },
  subContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
    height: '100%',
    overflow: 'visible', //為了讓scroll bar顯示在route_container層
  },
  gr: {
    backgroundColor: '#CFFFF1',
  },
  ye: {
    backgroundColor: '#FFE797',
  },
  db: {
    backgroundColor: '#163e75',
  },
  pi: {
    backgroundColor: '#FF96BD',
  },
  or: {
    backgroundColor: '#FFB457',
  },
  bl: {
    backgroundColor: '#000000',
  },
}))

function AnimationApp() {
  let location = useLocation()
  const headerHeight = useDynamicHeaderHeight()
  const classes = useStyle({ height: `calc(100% - ${headerHeight}px)` })

  const bgcolor = useMemo(() => {
    let bgcolor = ''
    switch (location.pathname) {
      case PATHES.HOME:
        bgcolor = classes.ye
        break
      case PATHES.DEMOS:
        bgcolor = classes.db
        break
      case PATHES.CREDIT_CARD_FORM:
        bgcolor = classes.bl
        break
      case PATHES.TODOLIST:
        bgcolor = classes.gr
        break
      case PATHES.ONLINE_DEMOS:
        bgcolor = classes.or
        break
      default:
        bgcolor = classes.ye
    }
    return bgcolor
  }, [location.pathname, classes.ye, classes.gr, classes.bl, classes.db, classes.or])

  return (
    // 第一層container，用於設置第一層padding，不過為了背景上色，把maxWidth拿掉
    <Container maxWidth={false} className={`${classes.route_container} ${bgcolor}`}>
      <Box className={classes.subContainer}>
        <SwitchRoutesContainer routes={routes} />
      </Box>
    </Container>
  )
}

function App() {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 30000,
        fetcher,
      }}
    >
      {/* acting like normalize.css */}
      <CssBaseline />
      <Router basename='real-life-project-react'>
        <div id='App'>
          <Header routes={routes} />
          <AnimationApp />
        </div>
      </Router>
    </SWRConfig>
  )
}

export default App
