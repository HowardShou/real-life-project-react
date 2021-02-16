import { Switch, Route } from 'react-router-dom'

function RouteWithSubRoutes({ routes, ...props }) {
  return (
    <Route {...props}>
      {/* 過去要用下面這種寫法才能把 history、match往下傳 */}
      {/* {(routeProp) => <props.component {...routeProp} {...props} />} */}
      {/* 不過現在有了useHistory、useRouteMatch等hook，可以不用再這樣傳了 */}
      <props.component routes={routes} />
    </Route>
  )
}

export function SwitchRoutesContainer({ routes }) {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <RouteWithSubRoutes key={idx} {...route} />
      ))}
    </Switch>
  )
}
