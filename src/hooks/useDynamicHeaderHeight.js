import { useMemo } from 'react'
import DYNAMIC_MINUS_HEIGHT from 'constants/dynamicMinusHeight'
import PATHES from 'constants/pathes'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useLocation } from 'react-router-dom'

const useDynamicHeaderHeight = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  let location = useLocation()

  const headerHeight = useMemo(() => {
    let headerHeight = 0
    if (location.pathname !== PATHES.ONLINE_DEMOS && matches) headerHeight = DYNAMIC_MINUS_HEIGHT.DEMO_AND_MOBILE
    else if (location.pathname !== PATHES.ONLINE_DEMOS && !matches)
      headerHeight = DYNAMIC_MINUS_HEIGHT.DEMO_BUT_NOT_MOBILE
    else if (location.pathname === PATHES.ONLINE_DEMOS && matches)
      headerHeight = DYNAMIC_MINUS_HEIGHT.NOT_DEMO_BUT_MOBILE
    else if (location.pathname === PATHES.ONLINE_DEMOS && !matches)
      headerHeight = DYNAMIC_MINUS_HEIGHT.NOT_DEMO_AND_NOT_MOBILE
    return headerHeight
  }, [location.pathname, matches])

  return headerHeight
}

export default useDynamicHeaderHeight
