import Box from '@material-ui/core/Box'
import { Switch, Route } from 'react-router-dom'
import DemoSite from './DemoSite'

const Demos = ({ routes, ...props }) => {
  return (
    <Switch>
      <Route exact path={props.match.path}>
        <DemoSite />
      </Route>
      {routes.map((route, idx) => (
        <Route key={idx} exact path={route.path} component={route.component} />
      ))}
    </Switch>
  )
}

export default Demos
