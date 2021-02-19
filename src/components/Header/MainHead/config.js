import GitHubIcon from '@material-ui/icons/GitHub'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import AppsIcon from '@material-ui/icons/Apps'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PATHES from 'constants/pathes'

const iconStyle = {
  color: '#fff',
}

const MainHeadConfig = [
  {
    path: PATHES.DEMOS,
    icon: <HomeOutlinedIcon style={iconStyle} />,
    isRouterLink: true,
    title: 'Home',
  },
  {
    path: PATHES.ONLINE_DEMOS,
    icon: <AppsIcon style={iconStyle} />,
    isRouterLink: true,
    title: 'Online Demos',
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

export default MainHeadConfig
