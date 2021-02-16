import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import { Link as RouterLink } from 'react-router-dom'
import logo from 'assets/react.svg'
import styles from './MainHead.module.scss'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MainHeadConfig from './config'

const useStyle = makeStyles({
  title: {
    maxWidth: '170px',
  },
  icons: {
    maxWidth: '190px',
  },
})

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyle()

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' bgcolor='common.black'>
      <Box display='flex' alignItems='center'>
        <Box component='img' className={styles.logo} src={logo} alt='logo' />
        <Typography component='div' variant='h5' className={matches ? classes.title : null}>
          <Box color='common.white' fontStyle='italic' letterSpacing={1}>{`Howard's Demo Site`}</Box>
        </Typography>
      </Box>
      <Box display='flex' justifyContent='flex-end' flexWrap='wrap' className={matches ? classes.icons : null}>
        {MainHeadConfig.map((i, idx) => {
          const linkProps = i.isRouterLink
            ? {
                component: RouterLink,
                to: i.path,
              }
            : {
                component: 'a',
                href: i.path,
                target: '_blank',
              }
          return (
            <Tooltip key={idx} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={i.title}>
              <IconButton rel='noopener' color='primary' {...linkProps}>
                {i.icon}
              </IconButton>
            </Tooltip>
          )
        })}
      </Box>
    </Box>
  )
}

export default Header
