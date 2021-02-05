import { SWRConfig } from 'swr'
import CssBaseline from '@material-ui/core/CssBaseline'
import routes from './router'
import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { fetcher } from 'utils'
// import { styled } from '@material-ui/core/styles'
// import { compose, spacing, palette } from '@material-ui/system'
// const Box = styled('div')(compose(spacing, palette))

// function RouteWithSubRoutes(route) {
//   // console.log('🚹🚺🚻🛏️🚼 ~ file: App.js ~ line 12 ~ RouteWithSubRoutes ~ route', props)
//   return (
//     <Route
//       path={route.path}
//       // component={<props.Component {...props} />}
//       render={(props) => {
//         console.log('🚹🚺🚻🛏️🚼 ~ file: App.js ~ line 44 ~ RouteWithSubRoutes ~ props', props)
//         return (
//           // pass the sub-routes down to keep nesting
//           <route.component {...props} routes={route.routes} />
//         )
//       }}
//     />
//   )
// }

function RouteWithSubRoutes(route) {
  console.log('🚹🚺🚻🛏️🚼 ~ file: App.js ~ line 29 ~ RouteWithSubRoutes ~ route', route)
  return <Route path={route.path} component={route.component} />
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
      <div id='App'>
        <Router basename='real-life-project-react'>
          <div>
            <nav>
              <ul>
                {routes.map(({ path }, idx) => (
                  <li key={idx}>
                    <Link to={path}>{path}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Switch>
              {routes.map((route, idx) => (
                <RouteWithSubRoutes key={idx} {...route} />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    </SWRConfig>
  )
}

export default App
