import Box from '@material-ui/core/Box'
import MainHead from './MainHead'
import SubHead from './SubHead'

const Header = (props) => {
  return (
    <Box display='flex' flexDirection='column'>
      <MainHead routes={props.routes} />
      <SubHead />
    </Box>
  )
}

export default Header
