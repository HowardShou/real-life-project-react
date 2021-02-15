import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import { Link as RouterLink } from 'react-router-dom'
import logo from 'assets/react.svg'
import styles from './Header.module.scss'
import { useTheme } from '@material-ui/core/styles'

function Icon(props) {
  const { palette } = useTheme()
  console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 14 ~ Icon ~ palette', palette)
  const item = React.cloneElement(props.children, { color: 'error' })
  return item
}

const Header = ({ routes }) => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' bgcolor='common.black'>
      <Box display='flex' alignItems='center'>
        <Box component='img' className={styles.logo} src={logo} alt='logo' />
        <Typography component='div' variant='h5'>
          <Box color='common.white' fontStyle='italic' letterSpacing={1}>{`Howard's Demo Site`}</Box>
        </Typography>
      </Box>
      <Box display='flex' justifyContent='flex-end'>
        {routes.map((i, idx) => {
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
                {/* <Icon>{i.icon}</Icon> */}
              </IconButton>
            </Tooltip>
          )
        })}
      </Box>
    </Box>
  )
}

export default Header
