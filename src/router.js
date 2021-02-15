import Demos from './components/Demos'
import ListTest from 'components/ListTest'
import TodoList from 'components/TodoList'
import CreditCardForm from 'components/CreditCardForm'
import PhotoFetcher from 'components/PhotoFetcher'
import Iframes from 'components/IframeDemos'
import GitHubIcon from '@material-ui/icons/GitHub'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import AppsIcon from '@material-ui/icons/Apps'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PATHES from './constants/pathes'

const iconStyle = {
  color: '#fff',
}

const routes = [
  {
    path: PATHES.HOME,
    icon: <HomeOutlinedIcon style={iconStyle} />,
    component: PhotoFetcher,
    isRouterLink: true,
    title: 'Home',
  },
  {
    path: PATHES.DEMOS,
    icon: <AppsIcon style={iconStyle} />,
    component: Demos,
    isRouterLink: true,
    title: 'Demos',
    routes: [
      {
        path: PATHES.CREDIT_CARD_FORM,
        component: CreditCardForm,
      },
      {
        path: PATHES.TODOLIST,
        component: TodoList,
      },
      {
        path: PATHES.PHOTOS_FETCHER,
        component: PhotoFetcher,
      },
      {
        path: PATHES.ONLINE_DEMOS,
        component: Iframes,
      },
    ],
  },
  {
    path: 'https://github.com/HowardShou/real-life-project-react',
    title: 'Repo',
    icon: <GitHubIcon style={iconStyle} />,
    isRouterLink: false,
  },
  {
    path: 'https://www.linkedin.com/in/howard-shou-%E5%A3%BD%E5%93%81%E7%9A%93-6492b71a5/',
    title: 'profile',
    icon: <AccountCircleIcon style={iconStyle} />,
    isRouterLink: false,
  },
  {
    path: 'https://howardshou.github.io/real-life-project/index.html',
    title: 'Legacy Portfolio',
    icon: <BusinessCenterOutlinedIcon style={iconStyle} />,
    isRouterLink: false,
  },
]

export default routes
