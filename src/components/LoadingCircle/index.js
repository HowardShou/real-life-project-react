import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import useDynamicHeaderHeight from 'hooks/useDynamicHeaderHeight'

// import { makeStyles, useTheme } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       backgroundColor: theme.palette.background.paper,
//       borderRadius: '5px',
//     },
//   }
// })

const LoadingCircle = ({ dynamic = true }) => {
  const headerHeight = useDynamicHeaderHeight()
  const clientHeight = document.documentElement.clientHeight
  const currentVisualHeight = `${clientHeight - headerHeight}px`

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      height={`${dynamic ? currentVisualHeight : null}`}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingCircle
