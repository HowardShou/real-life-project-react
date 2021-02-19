import { lazy } from 'react'
import PATHES from './constants/pathes'

const Home = lazy(() => import('components/Home'))
const SwitchRoutesContainer = lazy(() => import('components/RouterComponents'))
const NoMatch = lazy(() => import('components/NoMatch'))
const TodoList = lazy(() => import('components/TodoList'))
const CreditCardForm = lazy(() => import('components/CreditCardForm'))
const DemoSite = lazy(() => import('components/DemoSite'))
const PhotoFetcher = lazy(() => import('components/PhotoFetcher'))
const Iframes = lazy(() => import('components/IframeDemos'))

const routes = [
  {
    path: PATHES.HOME,
    childComponent: Home,
    exact: true,
    routes: [],
  },
  {
    path: PATHES.DEMOS,
    childComponent: SwitchRoutesContainer,
    // 若設為true，/Demos/OOXX...等路徑都會因為不合於/Demos而不被render!
    exact: false,
    routes: [
      {
        path: PATHES.DEMOS,
        childComponent: DemoSite,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.CREDIT_CARD_FORM,
        childComponent: CreditCardForm,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.TODOLIST,
        childComponent: TodoList,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.PHOTOS_FETCHER,
        childComponent: PhotoFetcher,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.ONLINE_DEMOS,
        childComponent: Iframes,
        exact: true,
        routes: [],
      },
      {
        path: '*',
        childComponent: NoMatch,
      },
    ],
  },
  {
    path: '*',
    childComponent: NoMatch,
  },
]

export default routes
