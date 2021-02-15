import { useMemo } from 'react'
import { SWRConfig } from 'swr'
import routes from './router'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { fetcher } from 'utils'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Header from './components/Header'
import PATHES from './constants/pathes'
import DYNAMIC_MINUS_HEIGHT from './constants/dynamicMinusHeight'
import './App.scss'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />
      }}
    />
  )
}

const useStyle = makeStyles({
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
  // subContainer: {
  //   height: '100%',
  //   overflow: 'auto',
  //   padding: 0,
  // },
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
})

function AnimationApp() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  let location = useLocation()

  const headerHeight = useMemo(() => {
    let headerHeight = 0
    if (location.pathname.includes('/Demos') && matches) headerHeight = DYNAMIC_MINUS_HEIGHT.DEMO_AND_MOBILE
    else if (location.pathname.includes('/Demos') && !matches) headerHeight = DYNAMIC_MINUS_HEIGHT.DEMO_BUT_NOT_MOBILE
    else if (!location.pathname.includes('/Demos') && matches) headerHeight = DYNAMIC_MINUS_HEIGHT.NOT_DEMO_BUT_MOBILE
    else if (!location.pathname.includes('/Demos') && !matches)
      headerHeight = DYNAMIC_MINUS_HEIGHT.NOT_DEMO_AND_NOT_MOBILE
    return headerHeight
  }, [location.pathname, matches])

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
      {/* 如果不設第二層container設置maxWidth再用margin 0 auto置中，記得底下的容器的container要自己給寬度 */}
      {/* 如果用了第二層container，需要給subContainer的相關屬性撐大它外，大螢幕scrollbar出現的位置也會比較不直觀，最後不採用 */}
      {/* <Container className={classes.subContainer}> */}
      <Switch>
        {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
      </Switch>
      {/* </Container> */}
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
