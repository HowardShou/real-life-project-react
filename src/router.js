import ListTest from 'components/ListTest'
import CreditCardForm from 'components/CreditCardForm'
import IG from 'components/IG'
import Iframes from 'components/IframeDemos'
import MailOutline from '@material-ui/icons/MailOutline'
import GitHubIcon from '@material-ui/icons/GitHub'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import AppsIcon from '@material-ui/icons/Apps'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import { Link as RouterLink } from 'react-router-dom'
// import { grey } from '@material-ui/core/colors'

const iconStyle = {
  color: '#fff',
}

const routes = [
  {
    path: '/Home',
    // label: 'Home',
    icon: <HomeOutlinedIcon style={iconStyle} />,
    component: IG,
    isRouterLink: true,
    title: 'Home',
  },
  {
    path: '/Demos',
    // label: 'Demos',
    icon: <AppsIcon style={iconStyle} />,
    component: CreditCardForm,
    isRouterLink: true,
    title: 'Demos',
    // routes: [
    //   {
    //     path: '/Demos/CreditCardForm',
    //     component: CreditCardForm,
    //   },
    //   {
    //     path: '/Demos/ToDoList',
    //     component: IG,
    //   },
    // ],
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
