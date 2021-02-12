import { SWRConfig } from 'swr'
import CssBaseline from '@material-ui/core/CssBaseline'
import routes from './router'
import './App.scss'
import { BrowserRouter as Router, Switch, Route, useLocation, useParams } from 'react-router-dom'
import { fetcher } from 'utils'
import Header from './components/Header'
import Container from '@material-ui/core/Container'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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

function RouteWithSubRoutes(props) {
  return <Route path={props.path} component={props.component} />
}

// function AnimationApp(props) {
//   let location = useLocation()

//   let bg = ''
//   if (location.pathname.includes('/Home')) bg = 'og'
//   else if (location.pathname.includes('/Demo')) bg = 'ye'

//   return (
//     <div className={`route-container ${bg}`}>
//       <TransitionGroup>
//         {/*
//             This is no different than other usage of
//             <CSSTransition>, just make sure to pass
//             `location` to `Switch` so it can match
//             the old location as it animates out.
//           */}
//         <CSSTransition key={location.key} classNames='fade' timeout={300}>
//           <Switch location={location}>
//             {routes.map((route, idx) => (
//               <RouteWithSubRoutes key={idx} {...route} />
//             ))}
//           </Switch>
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
//   )
// }

// function AnimationApp(props) {
//   let location = useLocation()

//   let bg = ''
//   if (location.pathname.includes('/Home')) bg = 'og'
//   else if (location.pathname.includes('/Demo')) bg = 'ye'

//   return (
//     <div className={`route-container ${bg}`}>
//       <Switch>
//         {routes.map((route, idx) => (
//           <RouteWithSubRoutes key={idx} {...route} />
//         ))}
//       </Switch>
//     </div>
//   )
// }

function AnimationApp(props) {
  let location = useLocation()

  let bg = ''
  if (location.pathname.includes('/Home')) bg = 'og'
  else if (location.pathname.includes('/Demo')) bg = 'ye'

  return (
    <Container maxWidth={false} className={`route-container ${bg}`}>
      <Switch>
        {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
      </Switch>
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
      <div id='App'>
        <Router basename='real-life-project-react'>
          <Header routes={routes} />
          <AnimationApp />
        </Router>
      </div>
    </SWRConfig>
  )
}

export default App
