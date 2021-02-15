import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import IconButton from '@material-ui/core/IconButton'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import routes from 'router'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

const Footer = ({ routes, ...props }) => {
  return (
    <Box display='flex' justifyContent='flex-end'>
      {routes.map((i, idx) => {
        console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 20 ~ {routes.map ~ i', i)
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
          <IconButton key={idx} rel='noopener' title={i.title} {...linkProps}>
            {i.icon}
          </IconButton>
        )
      })}
    </Box>
  )
}

export default Footer
