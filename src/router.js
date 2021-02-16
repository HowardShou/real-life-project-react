import { SwitchRoutesContainer } from 'components/RouterComponents'
import NoMatch from 'components/NoMatch'
import TodoList from 'components/TodoList'
import CreditCardForm from 'components/CreditCardForm'
import DemoSite from 'components/DemoSite'
import PhotoFetcher from 'components/PhotoFetcher'
import Iframes from 'components/IframeDemos'
import PATHES from './constants/pathes'

const routes = [
  {
    path: PATHES.HOME,
    component: PhotoFetcher,
    exact: true,
    routes: [],
  },
  {
    path: PATHES.DEMOS,
    component: SwitchRoutesContainer,
    // 若設為true，/Demos/OOXX...等路徑都會因為不合於/Demos而不被render!
    exact: false,
    routes: [
      {
        path: PATHES.DEMOS,
        component: DemoSite,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.CREDIT_CARD_FORM,
        component: CreditCardForm,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.TODOLIST,
        component: TodoList,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.PHOTOS_FETCHER,
        component: PhotoFetcher,
        exact: true,
        routes: [],
      },
      {
        path: PATHES.ONLINE_DEMOS,
        component: Iframes,
        exact: true,
        routes: [],
      },
      {
        path: '*',
        component: NoMatch,
      },
    ],
  },
  {
    path: '*',
    component: NoMatch,
  },
]

export default routes
